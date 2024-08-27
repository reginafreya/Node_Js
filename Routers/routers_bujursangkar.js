const express = require ('express')
const app = express()

app.use(express.json())

const controllers_bujursangkar = require('../Controllers/controllers_bujursangkar')

app.post("/bujur_sangkar", controllers_bujursangkar.bujur_sangkar)

module.exports = app