const express = require('express');
const router = express.Router();
module.exports = router;
const pacientesController = require('../controllers/pacientesControllers.js');


router.get('/' , pacientesController.consultar);

router.post('/' , pacientesController.registrar);
   
//Rutas por id

router.route("/:id")
.get(pacientesController.consultarParametro)
.put(pacientesController.actualizar)
.delete(pacientesController.eliminar);
    
