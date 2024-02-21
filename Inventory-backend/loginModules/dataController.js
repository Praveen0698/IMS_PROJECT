// logInModelController.js
const { logInModel, mpinModel } = require("./schema");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

exports.getLogin = async (req, res) => {
  console.log(req.body);
  try {
    try {
      const user = await logInModel.findOne({
        username: req.body.username,
      });

      await logInModel.updateOne(
        { username: req.body.username },
        { $set: { isRemember: req.body.isRemember } }
      );

      const hashedPassword = CryptoJS.AES.decrypt(
        user.password,
        process.env.PASS_SEC
      );

      const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

      const inputPassword = req.body.password;

      if (originalPassword != inputPassword) {
        res.json("failure");
      } else {
        const accessToken = jwt.sign(
          {
            id: user._id,
            isRemember: user.isRemember,
          },
          process.env.JWT_SEC,
          { expiresIn: "3d" }
        );

        res.status(200).json({ accessToken });
      }
    } catch (err) {
      res.json("failure");
    }
  } catch (err) {
    res.json(err);
  }
};

exports.createMpin = async (req, res) => {
  try {
    await mpinModel.create({
      mpin: CryptoJS.AES.encrypt(
        req.body.mpin,
        process.env.PASS_MPIN
      ).toString(),
    });
    res.json("success");
  } catch (err) {
    console.log(err);
  }
};

exports.getMpin = async (req, res) => {
  const user = await mpinModel.find({});
  const hashedMpin = CryptoJS.AES.decrypt(user[0].mpin, process.env.PASS_MPIN);

  const originalMpin = hashedMpin.toString(CryptoJS.enc.Utf8);

  const mpin = req.body.mpin;

  if (originalMpin != mpin) {
    res.json("failure");
  } else {
    res.status(200).json("success");
  }
};
exports.sendMpin = async (req, res) => {
  const user = await mpinModel
    .find({})
    .then(() => res.json(user))
    .catch((err) => res.json(err));
};

// exports.deleteCompany = async (req, res) => {
//   try {
//     await logInModel.deleteOne({ _id: req.params.id });
//     res.json({ message: "Company deleted successfully" });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// exports.getAllCompanies = async (req, res) => {
//   try {
//     const result = await logInModel.find({});
//     res.json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// exports.getCompanyById = async (req, res) => {
//   try {
//     const result = await logInModel.findOne({ _id: req.params.id });
//     res.json(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

exports.updateMpin = async (req, res) => {
  try {
    const result = await mpinModel.find({});
    console.log(result);
    await result[0].updateOne({
      mpin: CryptoJS.AES.encrypt(
        req.body.mpin,
        process.env.PASS_MPIN
      ).toString(),
    });
    res.json("success");
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
