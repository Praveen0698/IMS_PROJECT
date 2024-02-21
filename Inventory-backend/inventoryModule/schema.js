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

let inventorySchema = new mongoose.Schema({
  itemName: String,
  itemCode: String,
  itemDescription: String,
  sizes: String,
  salesPrice: Number,
  purchasePrice: Number,
  measuringUnit: String,
  openingStock: Number,
  openingStockRate: Number,
  gstTax: Number,
  reorderPoint: Number,
  file: String,
  category: String,
});

const inventoryModel = mongoose.model("inventory", inventorySchema);

module.exports = inventoryModel;
