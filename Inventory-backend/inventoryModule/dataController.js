const inventoryModel = require("./schema");

exports.createInventory = async (req, res, next) => {
  try {
    const {
      itemName,
      itemCode,
      itemDescription,
      sizes,
      salesPrice,
      purchasePrice,
      measuringUnit,
      openingStock,
      openingStockRate,
      gstTax,
      reorderPoint,
      category,
    } = req.body;

    await inventoryModel.create({
      itemName: itemName,
      itemCode: itemCode,
      itemDescription: itemDescription,
      sizes: sizes,
      salesPrice: salesPrice,
      purchasePrice: purchasePrice,
      measuringUnit: measuringUnit,
      openingStock: openingStock,
      openingStockRate: openingStockRate,
      gstTax: gstTax,
      reorderPoint: reorderPoint,
      file: req.file.filename,
      category: category,
    });
    res.json({ message: "success" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

exports.getInventory = async (req, res) => {
  await inventoryModel
    .find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

exports.getListItem = async (req, res) => {
  await inventoryModel
    .findOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

exports.deleteListItem = async (req, res) => {
  await inventoryModel
    .deleteOne({ _id: req.params.id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};
