module.exports = (sequelize, DataTypes) => {

    alias = "direccion";

    cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        id_user : {
            type: DataTypes.INTEGER,        
            },        
       
        provincia:{
            type: DataTypes.STRING (200)
            },
 
        localidad: {
            type: DataTypes.STRING (200)
        },
        calle:{
            type: DataTypes.STRING (200)
        },
        numero: {
            type: DataTypes.STRING (200)
        },
        codigoPostal: {
            type: DataTypes.STRING (200)
        },
    
        
    }

    config = {
        tableName: "direccion",
        timestamps: false
    };


const direcciones = sequelize.define (alias, cols, config);

return direcciones;
}

