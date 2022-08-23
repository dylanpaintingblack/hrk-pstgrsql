// Funciones "CRUD"
// crear
// listarTodo
// listarUno
// actualizar
// borrar

const db = require("../models");
const Provider = db.providers;
const Op = db.Sequelize.Op;

//Crear y guardar proveedor
exports.crear = (req, res) => {
    // Validar
    if (!req.body.categoria) {
      res.status(400).send({
        message: "No puede estar vacio!"
      });
      return;
    }
  
    // crear un proveedor
    const provider = {
      id: req.body.id,
      nombre: req.body.nombre,
      email: req.body.email,
      edad: req.body.edad,
      rut: req.body.rut,
      razonSocial: req.body.razonSocial,
      municipio: req.body.municipio,
      departamento: req.body.departamento,
      direccion: req.body.direccion,
      celular: req.body.celular,
      categoria: req.body.categoria,
      trayectoriaAños: req.body.trayectoriaAños,
      ordenesExito: req.body.ordenesExito,
      ordenesFallo: req.body.ordenesFallo,
      ultCalificacion: req.body.ultCalificacion,
      adjuntoRUT: req.body.adjuntoRUT,
      foto: req.body.foto
    };
  
    // Guardar proveedor en la base
    Provider.crear(provider)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al crear el proveedor."
        });
      });
  };
//Listar todos
exports.listarTodo=(req,res)=>{
    const categoria = req.query.categoria;
    var condicion = categoria ? { categoria: { [Op.ilike]: `%${categoria}%` } } : null;
  
    Provider.listarTodo({ where: condicion })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocurrio un error al listar."
        });
      });
}
//Listar uno por id
exports.listarUno=(req,res)=>{
    const id = req.params.id;

    Provider.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `No se pudo encontrar proveedor con id:${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error al encontrar proveedor con id:" + id
        });
      });
}
//listar por categoria


//Actualizar por id
exports.actualizar=(req,res)=>{
    const id = req.params.id;

    Provider.actualizar(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Proveedor actualizado con exito!."
          });
        } else {
          res.send({
            message: `No se pudo encontrar proveedor con id:${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error actualizando proveedor con id:" + id
        });
      });
}
//Borrar por id
exports.borrarUno=(req,res)=>{
    const id = req.params.id;

    Provider.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Proveedor borrado con exito!"
          });
        } else {
          res.send({
            message: `No se puede borrar Proveedor con id:${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "No se puede borrar proveedor con id: " + id
        });
      });
}