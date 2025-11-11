
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: { type: String, trim: true },
  lastName: { type: String, trim: true },
  name: { type: String, trim: true },
  phone: { type: String, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  service: { type: String, trim: true },
  message: { type: String, trim: true },
  createdAt: { type: Date, default: Date.now },
});

const contactModel = mongoose.model("Contact", contactSchema);
module.exports = contactModel;
