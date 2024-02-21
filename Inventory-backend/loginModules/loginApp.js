const app = require("../server");

const {
  getLogin,
  createMpin,
  getMpin,
  sendMpin,
  updateMpin,
} = require("./dataController");

app.post("/", getLogin);
app.get("/", sendMpin);
app.post("/set-mpin", createMpin);
app.post("/mpin", getMpin);
app.get("/mpin", sendMpin);
app.put("/set-mpin", updateMpin);

module.exports = app;
