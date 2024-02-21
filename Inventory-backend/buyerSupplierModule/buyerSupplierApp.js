const app = require("../server");

const { createBuyerSupplier, getBuyersSuppliers } = require("./dataController");

app.post("/buyers-suppliers", createBuyerSupplier);
app.get("/buyers-suppliers", getBuyersSuppliers);

module.exports = app;
