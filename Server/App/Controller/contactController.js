
const contactModel = require("../Model/contactModel");
const nodemailer = require("nodemailer");

const insertUser = async (req, res) => {
  try {
    const { firstName, lastName, name, phone, email, service, message } = req.body;

    // Basic validation
    if (!email || (!name && !(firstName && lastName))) {
      return res.status(400).json({ err: "Name and Email are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ err: "Invalid email format" });
    }

    const newContact = new contactModel({
      firstName,
      lastName,
      name,
      phone,
      email,
      service,
      message,
    });

    await newContact.save();

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASS,
      },
    });

    const mailOptions = {
      from: `"Aruh Koncepts" <${process.env.MY_EMAIL}>`,
      to: "aruhkoncepts25@gmail.com",
      subject: `New Form Submission${service ? " - " + service : ""}`,
      text: `
        Name: ${name || firstName + " " + lastName}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Service: ${service || "N/A"}
        Message: ${message || "N/A"}
      `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully:", info.response);
        res.status(201).json({ msg: "Message submitted successfully", emailInfo: info.response });
    } catch (err) {
        console.error("Error sending email:", err);
        res.status(500).json({ err: "Failed to send email", details: err.message });
    }

    res.status(201).json({ msg: "Message submitted successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ err: "Server Error" });
  }
};


module.exports = { insertUser };
