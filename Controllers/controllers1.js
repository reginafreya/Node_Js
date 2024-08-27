const hitungVolumeLuas = (req, res) => {
    const { sisi } = req.body;
    const volume = Math.pow(sisi, 3);
    const luasPermukaan = 6 * Math.pow(sisi, 2);
    res.json({ volume, luasPermukaan });
};

module.exports = { hitungVolumeLuas };
