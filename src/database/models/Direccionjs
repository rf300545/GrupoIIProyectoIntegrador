function direccionData (sequelize, dataTypes) {

    alias = "direccion";

    cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
            },
        id_user : {
            type: dataTypes.INTERGER,        
            },        
       
        provincia:{
            type: dataTypes.STRING (200)
            },
 
        localidad: {
            type: dataTypes.STRING (200)
        },
        calle:{
            type: dataTypes.STRING (200)
        },
        numero: {
            type: dataTypes.STRING (200)
        },
        codigoPostal: {
            type: dataTypes.STRING (200)
        },
    
        
    }

    config = {
        tableName: "direccion",
        timestamps: false
    };


const direcciones = sequelize.define (alias, cols, config);

return direcciones;
}

module.exports = direccionData; 