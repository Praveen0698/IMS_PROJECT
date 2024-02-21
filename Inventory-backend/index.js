// index.js
const app = require("./loginModules/loginApp");
const buyerSupplierApp = require("./buyerSupplierModule/buyerSupplierApp");
const inventoryApp = require("./inventoryModule/InventoryApp");

const PORT = process.env.PORT || 3500;
const BUYER_SUPPLIER_PORT = process.env.BUY_SUP_PORT || 3600;
const INVENTORY_PORT = process.env.INVENTORY_PORT || 3700;

app.listen(PORT, () => {
  console.log(`Login server started on port ${PORT}`);
});

buyerSupplierApp.listen(BUYER_SUPPLIER_PORT, () => {
  console.log(`Buyer-Supplier server started on port ${BUYER_SUPPLIER_PORT}`);
});
inventoryApp.listen(INVENTORY_PORT, () => {
  console.log(`Inventory server started on port ${INVENTORY_PORT}`);
});
