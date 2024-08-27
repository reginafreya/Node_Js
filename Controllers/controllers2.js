const konversiSuhu = (req, res) => {
    const { celsius } = req.body;
    const fahrenheit = (celsius * 9/5) + 32;
    res.json({ celsius, fahrenheit });
};

module.exports = { konversiSuhu };
