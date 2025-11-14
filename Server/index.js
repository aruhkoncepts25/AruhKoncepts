const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.set("trust proxy", 1); // 👈 ADD THIS for rate limiting on Render
const PORT = process.env.PORT || 3000;

// Routes
const contactRoute = require("./App/Routes/contact");

// ---- Middlewares ----
app.use(express.json({ limit: "10kb" }));

// Your frontend URLs
const allowedOrigins = [
  "http://localhost:5173",
  "https://www.aruhkoncepts.com",
  "https://aruhkoncepts.com",
  "https://aruhkoncepts-landing.vercel.app",
];

// CORS
app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

// Helmet security
app.use(helmet());

// Rate limiter
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20, // 20 requests per IP per 15 minutes
  message: "Too many requests from this IP, please try again later",
});

app.use("/contactRoute", limiter, contactRoute);

// Base
app.get("/", (req, res) => {
  res.send("Hello Backend Securely 🚀");
});

// Database
mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.DBCONNECT)
  .then(() => {
    console.log("✅ Mongoose Connected...");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Mongoose Connection Failed:", err.message);
  });
