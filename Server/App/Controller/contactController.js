const contactModel = require("../Model/contactModel");
const nodemailer=require("nodemailer")

const insertUser = async (req, res) => {
  try {
    const { name, email, service, message } = req.body;


    //// jgkdjgfdsghdsghjdfigjfdojoidfjgoidfjgoidfjgoidfjgidfjgoidfjgdfjgiodfgjdrf

    if (!name || !email || !service || !message) {
      return res.status(400).json({ err: "All Fields Are Required" });
    }

    // ✅ Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ err: "Invalid email format." });
    }


    const newContact = await contactModel({
      name,
      email,
      service,
      message,
    });

    await newContact.save();
    // nodemailer setup 
    const transporter=nodemailer.createTransport({
      service:"gmail",
      auth:{
        user:process.env.MY_EMAIL,
        pass:process.env.MY_PASS,
      }
    });

     // Mail options
    const mailOptions = {
      from: email,  // customer gmail
      to: "aruhkoncepts25@gmail.com", // or Owner gmail
      subject: `New Client Form Submission - ${service}`,
      text: `
        Name: ${name}
        Email: ${email}
        Service: ${service}
        Message: ${message}
      `,
    };

       // Send email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
      } else {
        console.log("Email sent:", info.response);
      }
    });

    res.status(201).json({ msg: "Message Submitted Sucessfully [backend]" });
  } catch (error) {
    console.error("Error Saving Contact", error);
    res.status(500).json({ err: "Server Error" });
  }
};

module.exports = { insertUser };
