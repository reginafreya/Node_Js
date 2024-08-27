const konversiBilangan = (req, res) => {
    const { decimal } = req.body;
    const binary = decimal.toString(2);
    res.json({ decimal, binary });
};

module.exports = { konversiBilangan };
