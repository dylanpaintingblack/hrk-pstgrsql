module.exports = app =>{
    const providers = require("../controllers/providerController");
    var router = require("express").Router();
    //Crear nuevo Proveedor
    router.post("/",providers.crear);
    //Ver todos los proveedores
    router.get("/",providers.listarTodo);
    //Ver un solo proveedor con id
    router.get("/",providers.listarUno);
    //Actualizar proveedor con id
    router.put("/:id",providers.actualizar);
    //borrar proveedor con id
    router.delete("/:id",providers.borrarUno);
    //ver proveedores con categoria
    
}