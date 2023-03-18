const express = require("express");
const bodyParser = require("body-parser");
const Stories = require("../models/Stories");

const router = express.Router();

router.use(bodyParser.json());

//save story
router.post("/story/add", async (req, res) => {
  let newStory = new Stories(req.body);

  try {
    const savedStory = await newStory.save();
    return res.status(200).json({
      success: "Story saved successfully",
      data: savedStory
    });
  } catch (err) {
    return res.status(404).json({
      error: err.message
    });
  }
});

module.exports = router;



