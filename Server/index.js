const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors=require("cors");
const PORT = process.env.PORT || 3000;
const contactRoute=require("./App/Routes/contact")
app.use(express.json());
app.use(cors());

require("dotenv").config();
app.use("/contactRoute",contactRoute);
// Base Route For Checking -----
app.get("/", (req, res) => {
  res.send("Hello Backend!");
});



mongoose.set('strictQuery', true);
// Mongoose Connection.......
mongoose
  .connect(process.env.DBCONNECT)
  .then(() => {
    console.log("Mongoose Is Connected To Database.....");
    app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => {
    console.log("❌ Mongoose is not connected:", err.message);
  });
