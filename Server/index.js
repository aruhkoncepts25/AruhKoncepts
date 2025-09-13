const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
// const mongoSanitize = require("express-mongo-sanitize");  // not use becose new version mai valid nahi hai
// const xss = require("xss-clean"); // not use becose new version mai valid nahi hai
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
const contactRoute = require("./App/Routes/contact");

// ---- Middlewares ----
app.use(express.json({ limit: "10kb" })); // Prevent large payload attacks
app.use(cors({ origin: "http://localhost:5173" })); // Allow only frontend domain
app.use(helmet()); // Secure headers
// ✅ Fix: mongo-sanitize with Express v5
// app.use(
//   mongoSanitize({
//     sanitizeQuery: false, // Prevents crash in Express v5
//   })
// );
// app.use(xss()); // Prevent XSS attacks

// ---- Rate Limiter ----
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 mins
  max: 20, // 20 requests per IP
  message: "Too many requests from this IP, please try again later",
});
app.use("/contactRoute", limiter, contactRoute);

// Base Route
app.get("/", (req, res) => {
  res.send("Hello Backend Securely 🚀");
});

// ---- MongoDB Connection ----
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DBCONNECT)
  .then(() => {
    console.log("✅ Mongoose Connected...");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Mongoose Connection Failed:", err.message);
  });
