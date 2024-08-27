const express = require ('express')
const app = express()

app.use(express.json())

const praktikumController = require('../Controllers/PraktikumController')

app.get("/profil/:name/:age", praktikumController.profil)
// app.post ("/bujur_sangkar", praktikumController.bujuSangkar)

module.exports = app