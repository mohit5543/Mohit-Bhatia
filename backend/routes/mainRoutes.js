const express = require("express");
const router = express.Router();

const { getProjects } = require("../controller/projectController");

router.get("/", (req, res) => {
    res.send("Portfolio server is running ")
})

// New route 
router.get("/projects", getProjects);

module.exports = router;
