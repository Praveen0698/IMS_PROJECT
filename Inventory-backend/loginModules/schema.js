require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });

let dbSchema = new mongoose.Schema({
  username: String,
  password: String,
  isRemember: String,
});

let mpinSchema = new mongoose.Schema({
  mpin: String,
});

const logInModel = mongoose.model("logIn", dbSchema);
const mpinModel = mongoose.model("mpin", mpinSchema);

module.exports = { logInModel, mpinModel };
