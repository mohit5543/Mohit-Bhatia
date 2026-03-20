const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/repos", async (req, res) => {
  try {
    const response = await axios.get("https://api.github.com/users/mohit5543/repos");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch repos" });
  }
});

module.exports = router;