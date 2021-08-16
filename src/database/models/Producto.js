function productData (sequelize, dataTypes) {

    alias = "brand";

    cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
            },
        nombre : {
            type: dataTypes.STRING(200),          
            },        
        id_brand : {
            type: dataTypes.INTERGER,
            },
        descripcion:{
            type: dataTypes.STRING (200)
            },
        id_category:{
            type: dataTypes.INTERGER,
        },
        ingrediente: {
            type: dataTypes.STRING (200)
        },
        peso:{
            type: dataTypes.STRING (200)
        },
        imagen: {
            type: dataTypes.STRING (200)
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE   
        },
        deleted: {
            type:dataTypes.INTERGER,
        },
        modoDeUso: {
            type:dataTypes.STRING (200)
        }       
    }

    config = {
        tableName: "producto",
        timestamps: false
    };


const productos = sequelize.define (alias, cols, config);

return productos;
}

module.exports = productData; 