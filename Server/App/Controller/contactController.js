// const contactModel = require("../Model/contactModel");
// const nodemailer=require("nodemailer");

// const insertUser = async (req, res) => {
//   try {
//     const { name, email, service, message } = req.body;


//     //// jgkdjgfdsghdsghjdfigjfdojoidfjgoidfjgoidfjgoidfjgidfjgoidfjgdfjgiodfgjdrf

//     if (!name || !email || !service || !message) {
//       return res.status(400).json({ err: "All Fields Are Required" });
//     }

//     // ✅ Email format check
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       return res.status(400).json({ err: "Invalid email format." });
//     }


//     const newContact = await contactModel({
//       name,
//       email,
//       service,
//       message,
//     });

//     await newContact.save();
//     // nodemailer setup 
//     const transporter=nodemailer.createTransport({
//       service:"gmail",
//       auth:{
//         user:process.env.MY_EMAIL,
//         pass:process.env.MY_PASS,
//       }
//     });

//      // Mail options
//     const mailOptions = {
//       from: email,  // customer gmail
//       to: "aruhkoncepts25@gmail.com", // or Owner gmail
//       subject: `New Client Form Submission - ${service}`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Service: ${service}
//         Message: ${message}
//       `,
//     };

//        // Send email
//     transporter.sendMail(mailOptions, (err, info) => {
//       if (err) {
//         console.error("Error sending email:", err);
//       } else {
//         console.log("Email sent:", info.response);
//       }
//     });

//     res.status(201).json({ msg: "Message Submitted Sucessfully [backend]" });
//   } catch (error) {
//     console.error("Error Saving Contact", error);
//     res.status(500).json({ err: "Server Error" });
//   }
// };

// module.exports = { insertUser };



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
      from: email,
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

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) console.error("Error sending email:", err);
      else console.log("Email sent:", info.response);
    });

    res.status(201).json({ msg: "Message submitted successfully" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ err: "Server Error" });
  }
};

// const insertUser = async (req, res) => {
//   try {
//     const { firstName, lastName, name, phone, email, service, message } = req.body;

//     if (!email || (!name && !(firstName && lastName))) {
//       console.log("Validation failed: Name or Email missing");
//       return res.status(400).json({ err: "Name and Email are required" });
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       console.log("Validation failed: Invalid email format");
//       return res.status(400).json({ err: "Invalid email format" });
//     }

//     const newContact = new contactModel({
//       firstName,
//       lastName,
//       name,
//       phone,
//       email,
//       service,
//       message,
//     });

//      newContact.save();
//     console.log("Contact saved to DB:", newContact);

//     // Nodemailer setup
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.MY_EMAIL,
//         pass: process.env.MY_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.MY_EMAIL, // Gmail must match authenticated user
//       replyTo: email,             // Reply goes to form submitter
//       to: "aruhkoncepts25@gmail.com",
//       subject: `New Form Submission${service ? " - " + service : ""}`,
//       text: `
//         Name: ${name || firstName + " " + lastName}
//         Email: ${email}
//         Phone: ${phone || "N/A"}
//         Service: ${service || "N/A"}
//         Message: ${message || "N/A"}
//       `,
//     };

//     try {
//       const info = await transporter.sendMail(mailOptions);
//       console.log("Email sent successfully:", info.response);
//       res.status(201).json({ msg: "Message submitted successfully", emailInfo: info.response });
//     } catch (err) {
//       console.error("Error sending email:", err);
//       res.status(500).json({ err: "Failed to send email", details: err.message });
//     }

//   } catch (error) {
//     console.error("Error saving contact:", error);
//     res.status(500).json({ err: "Server Error", details: error.message });
//   }
// };


module.exports = { insertUser };
