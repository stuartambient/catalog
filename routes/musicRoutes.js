const express = require("express");

const musicController = require("../controllers/musicController");
const router = express.Router();

router.get("/music", musicController.getTitles);

module.exports = router;
