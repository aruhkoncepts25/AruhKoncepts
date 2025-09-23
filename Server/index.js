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
const allowedOrigins = [
  "http://localhost:5173",
  "https://aruhkoncepts.onrender.com"
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));
// Allow only frontend domain
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
      console.log(`🚀 Server running on port ${PORT}`);
      if (process.env.NODE_ENV === "production") {
        console.log(`🌐 Production URL: https://aruhkoncepts.onrender.com`);
      } else {
        console.log(`🌐 Local URL: http://localhost:${PORT}`);
      }
    });
  })
  .catch((err) => {
    console.error("❌ Mongoose Connection Failed:", err.message);
  });