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

let buyerSupplierSchema = new mongoose.Schema({
  name: String,
  mobileNumber: String,
  email: String,
  category: String,
  payAmount: Number,
  gstin: String,
  panNumber: String,
  billingAddress: String,
  shippingAddress: String,
  creditPeriod: Number,
  collectAmount: Number,
});

const buyerSupplierModel = mongoose.model("buyerSupplier", buyerSupplierSchema);

module.exports = buyerSupplierModel;
