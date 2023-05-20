const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PhoneBook = require("./model/PhoneBook");

app.use(express.json());
app.use(cors());

const PORT = 8080;
const uri = process.env.DB_URI;

app.listen(PORT, () => {
  console.log(`Server is running on: ${PORT} `);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxIdleTimeMS: 5000,
  })
  .then(() => {
    console.log("Database connected successfully");
  });

app.post("/add-phone", async (req, res) => {
  const phoneNumber = new PhoneBook(req.body);
  try {
    await phoneNumber.save();
    res.status(201).json({
      status: "Success",
      data: { phoneNumber },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

app.get("/get-phone", async (req, res) => {
  const phoneNumbers = await PhoneBook.find({});
  try {
    res.status(200).json({
      status: "Success",
      data: { phoneNumbers },
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});

app.patch("/update-phone/:id", async (req, res) => {
  const updatedPhone = await PhoneBook.findByIdAndUpdate(
    req.params.id,
    { phone: req.body.newPhone },
    {
      new: true,
      runValidators: true,
    }
  );
  try {
    res.status(200).json({
      status: "Success",
      data: { updatedPhone },
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete-phone/:id", async (req, res) => {
  await PhoneBook.findByIdAndDelete(req.params.id);
  try {
    res.status(204).json({
      status: "Success",
      data: {},
    });
  } catch (err) {
    res.status(500).json({
      status: "Failed",
      message: err,
    });
  }
});
