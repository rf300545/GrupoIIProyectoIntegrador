module.exports = (sequelize, DataTypes) =>  {

    alias = "Product";

    cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
            },
        nombre : {
            type: DataTypes.STRING(200),          
            },        
        id_brand : {
            type: DataTypes.INTEGER,
            },
        descripcion:{
            type: DataTypes.STRING (200)
            },
        id_category:{
            type: DataTypes.INTEGER,
        },
        ingrediente: {
            type: DataTypes.STRING (200)
        },
        peso:{
            type: DataTypes.STRING (200)
        },
        imagen: {
            type: DataTypes.STRING (200)
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updated_at: {
            type: DataTypes.DATE   
        },
        deleted: {
            type:DataTypes.INTEGER,
        },
        modoDeUso: {
            type:DataTypes.STRING (200)
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
    
 
    Product.belongsTo (models.Brand,{
        as:"brand",
        foreignKey: "id_brand",

    })
    Product.belongsToMany (models.Flavor,{
        as:"sabores",
        through: "product_flavor",
        foreignKey: "id_product",
        otherKey:"id_flavor",
        timestamps: false,
    });
  
}

return Product;
}

