const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express()

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//index soal 1234
const hitungVolumeLuas = require('./Routers/routers1');
const konversiSuhu = require('./Routers/routers2');
const konversiBilangan = require('./Routers/routers3');
const hitungBMI = require('./Routers/routers4');

app.use('/api', hitungVolumeLuas);
app.use('/api', konversiSuhu);
app.use('/api', konversiBilangan);
app.use('/api', hitungBMI);



// menjalankan server pada port 8000
app.listen(8000, () => {
console.log("Server run on port 8000");
})