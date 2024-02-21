const buyerSupplierModel = require("./schema");

exports.createBuyerSupplier = async (req, res) => {
  try {
    await buyerSupplierModel.create({
      name: req.body.name,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      category: req.body.category,
      collectAmount: req.body.collectAmount,
      gstin: req.body.gstin,
      panNumber: req.body.panNumber,
      billingAddress: req.body.billingAddress,
      shippingAddress: req.body.shippingAddress,
      creditPeriod: req.body.creditPeriod,
      payAmount: req.body.payAmount,
    });
    res.json("success");
  } catch (err) {
    console.log(err);
  }
};

exports.getBuyersSuppliers = async (req, res) => {
  await buyerSupplierModel
    .find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};
