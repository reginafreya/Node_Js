const express = require('express');
const router = express.Router();
const { hitungBMI } = require('../Controllers/controllers4');

router.post('/hitung-bmi', hitungBMI);

module.exports = router;
