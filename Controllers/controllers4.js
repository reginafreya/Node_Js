const hitungBMI = (req, res) => {
    const { berat, tinggi } = req.body;
    const bmi = berat / (tinggi * tinggi);
    res.json({ bmi });
};

module.exports = { hitungBMI };
