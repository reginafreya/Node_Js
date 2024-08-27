const express = require('express');
const router = express.Router();
const { konversiSuhu } = require('../Controllers/controllers2');

router.post('/konversi-suhu', konversiSuhu);

module.exports = router;
