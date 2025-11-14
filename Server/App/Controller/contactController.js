const contactModel = require("../Model/contactModel");
const nodemailer = require("nodemailer");

const insertUser = async (req, res) => {
  try {
    const { firstName, lastName, name, phone, email, service, message } = req.body;

    // --- 1. Validation ---
    if (!email || (!name && !(firstName && lastName))) {
      console.log("Validation failed: Name or Email missing");
      return res.status(400).json({ err: "Name and Email are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("Validation failed: Invalid email format");
      return res.status(400).json({ err: "Invalid email format" });
    }

    // --- 2. Save to Database ---
    const newContact = new contactModel({
      firstName,
      lastName,
      name,
      phone,
      email,
      service,
      message,
    });

    // 💡 FIXED: Added 'await' and store the saved document
    const savedContact = await newContact.save();
    console.log("Contact saved to DB:", savedContact);

    // --- 3. Send Success Response to User FIRST ---
    // The user's form submission is now complete.
    res.status(201).json({
      msg: "Message submitted successfully",
      contact: savedContact,
    });

    // --- 4. Send Email in Background ---
    // This runs after the user gets their success message.
    // If this fails, it won't crash the request.
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASS, // Use your 16-digit App Password
        },
      });

      const mailOptions = {
        from: process.env.MY_EMAIL, // 'From' must be the authenticated user
        replyTo: email,              // So replies go to the customer
        to: "lakshyasinghal2320@gmail.com", // Your email
        subject: `New Form Submission${service ? " - " + service : ""}`,
        text: `
          Name: ${name || (firstName || "") + " " + (lastName || "")}
          Email: ${email}
          Phone: ${phone || "N/A"}
          Service: ${service || "N/A"}
          Message: ${message || "N/A"}
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully in background:", info.response);
    } catch (emailError) {
      // Log the email error, but don't send a response
      console.error("Background email send failed:", emailError);
    }

  } catch (dbError) {
    // This 'catch' block will now correctly handle database/validation errors
    console.error("Error saving contact:", dbError);
    res.status(500).json({ err: "Server Error", details: dbError.message });
  }
};

module.exports = { insertUser };
