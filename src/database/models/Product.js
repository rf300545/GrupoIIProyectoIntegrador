function productData (sequelize, dataTypes) {

    alias = "Product";

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
        tableName: "product",
        timestamps: false
    };


const Product = sequelize.define (alias, cols, config);

Product.associate = function (models) {

    Product.belongsTo(models.Category, {
        
        as: "category",
        foreignKey: "id_category"

    })
    
    Product.hasMany(models.Flavor,{
        as: "products",
        through: "product_flavor",
        foreignKey: "id_product",
        otherKey: "id_flavor",
        timestamps: false, 

    }),
    Product.belongsTo (models.Brand,{
        as:"brand",
        foreignKey: "id_brand",

    }),
    Product.hasMany(models.user,{
        as: "products",
        through: "product_user",
        foreignKey: "id_product",
        otherKey: "id_user",
        timestamps: false, 

    });

}

return Product
}

module.exports = productData; 