
const express = require("express");
const multer = require("multer");
const adPost = require("../models/adPost");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/postad", upload.array("images", 3), (req, res) => {
    const { title, category, price, location, contact, description } = req.body;
    const images = req.files ? req.files.map((file) => file.filename) : [];

  const adData = { images, title, category, price, location, contact, description };

  adPost.createAd(adData, (err, result) => {
    if (err) {
      return res.status(500).send("Error posting ad");
    } else {
      return res.status(201).send("Ad posted successfully");
    }
  });
});

module.exports = router;
