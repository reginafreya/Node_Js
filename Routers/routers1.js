const express = require('express');
const router = express.Router();
const { hitungVolumeLuas } = require('../Controllers/controllers1');

router.post('/hitung-volume-luas', hitungVolumeLuas);

module.exports = router;
