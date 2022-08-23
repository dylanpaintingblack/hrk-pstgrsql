module.exports = (sequelize, Sequelize) => {
    const Provider = sequelize.define("provider", {
        id:{
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        nombre:{
            type: Sequelize.STRING
        },
        email:{
            type: Sequelize.STRING
        },
        edad:{
            type: Sequelize.INTEGER
        },
        rut:{
            type: Sequelize.INTEGER
        },
        razonSocial:{
            type: Sequelize.STRING
        },
        municipio:{
            type: Sequelize.STRING
        },
        departamento:{
            type: Sequelize.STRING
        },
        direccion:{
            type: Sequelize.STRING
        },
        celular:{
            type: Sequelize.INTEGER
        },
        categoria:{
            type: Sequelize.STRING
        },
        trayectoriaAños:{
            type: Sequelize.INTEGER
        },
        ordenesExito:{
            type: Sequelize.INTEGER
        },
        ordenesFallo:{
            type: Sequelize.INTEGER
        },
        ultCalificacion:{
            type: Sequelize.INTEGER
        },
        adjuntoRUT:{
            type: Sequelize.BLOB
        },
        foto:{
            type: Sequelize.BLOB
        },
    })
    return Provider;
}