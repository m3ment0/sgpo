const db = require('../database/conexion.js');


class pacientesController {
    constructor() { }

    consultar(req, res) {
        res.json({ msg: 'Consultar  Pacientes' });
    }

    registrar(req, res) {
        try {
            const { nombres , num_documento , telefono , correo} = req.body;
            db.query(`INSERT INTO paciente 
            (id_paciente  , nombres , num_documento , telefono , correo)
            VALUES(NULL , ? , ? , ? , ?);`,
                [nombres, num_documento, telefono, correo], () => {
                    if (error) {
                        res.status(400).send(error);
                    }
                    res.status(201).json(rows);
                });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    consultarParametro(req, res) {
        console.log(req.params);
        res.json({ msg: 'Consultar  Pacientes por : id' });
    }

    actualizar(req, res) {
        const { id } = req.params;
        res.json({ msg: `Actualizacion de Pacientes: ${id}` });
    }

    eliminar(req, res) {
        res.json({ msg: 'Eliminacion de Pacientes: id' });
    }
}
module.exports = new pacientesController();
