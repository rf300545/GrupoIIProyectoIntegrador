module.exports = (sequelize, DataTypes) =>  {

    alias = "User";

    cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        nombre : {
            type: DataTypes.STRING(200),          
            },        
        apellido:{
            type: DataTypes.STRING (200)
            },
        email:{
            type: DataTypes.STRING (200)
        },
        telefono: {
            type: DataTypes.INTEGER
        },
        contrasenia:{
            type: DataTypes.STRING (200)
        },
        avatar: {
            type: DataTypes.STRING (200)
        },
        id_direccion: {
            type: DataTypes.INTEGER
        },
        
    }

    config = {
        tableName: "user",
        timestamps: true
    };


const User = sequelize.define (alias, cols, config);

return User ;
}

