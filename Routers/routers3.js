const express = require('express');
const router = express.Router();
const { konversiBilangan } = require('../Controllers/controllers3');

router.post('/konversi-bilangan', konversiBilangan);

module.exports = router;
