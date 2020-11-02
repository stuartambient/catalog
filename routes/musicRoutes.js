/* eslint-disable import/newline-after-import */
/* eslint-disable quotes */

const express = require('express');

const musicController = require('../controllers/musicController');
const router = express.Router();

router.get('/setTitles', musicController.setTitles);
router.get('/getTitles', musicController.getTitles);

module.exports = router;
