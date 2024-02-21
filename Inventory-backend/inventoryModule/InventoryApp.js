const app = require("../server");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, "public/Images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

const {
  createInventory,
  getInventory,
  getListItem,
  deleteListItem,
} = require("./dataController");

app.post("/inventory", upload.single("file"), createInventory);
app.get("/inventory", getInventory);
app.get("/inventory/items-list/:id", getListItem);
app.delete("/inventory/delete/:id", deleteListItem);

module.exports = app;
