const express = require('express');
const app = express();
const cors = require('cors');
const pacientesRoutes = require('./routes/pacientesRoutes.js') ;

app.use(express.json());
app.use(cors());

app.listen(6500 , () => {
    console.log('Servidor Activo');
});

app.get('/' , (req , res) =>{
    res.send('Hola  Mundo');
});

app.use("/pacientes" , pacientesRoutes);



