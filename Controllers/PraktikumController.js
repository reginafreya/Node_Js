exports.profil = (req, res) => {
    let name = req.params.name // mengambil nilai pada parameter name
    let age = req.params.age // mengambil nilai pada parameter age
    let response = {
        nama: name,
        umur: age
        }
    
    return res.json(response)
}