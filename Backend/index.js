//declarando constantes express y mongoose
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
var port = process.env.port || 3678;
//configurar express ap || set up express app
const app = express();
require('./swagger')(app); // Importa y configura Swagger

//connect to mongo db
mongoose.connect(
  "mongodb+srv://YOUR MONGO URL"
);
app.use(cors());
//Indicar el fromato json para el archivo
app.use(express.json());
//Indicando ruta de la api y ruta acerca de routes y el llamado de metodos en Paciente
app.use("/api/pacientes", require("./routes/paciente.routes"));
//puerto
app.listen(port, () => {
  console.log("El servidor esta corriendo perfectamente " + port);
});
