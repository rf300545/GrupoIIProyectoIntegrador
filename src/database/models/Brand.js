function brandData (sequelize, dataTypes) {

    alias = "Brand";

    cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre : {
            type: dataTypes.STRING(200),
            
        }
    }

    config = {
        tableName: "brand",
        timestamps: false
    };


const Brand = sequelize.define (alias, cols, config);
Brand.associate = function (models) {

    Brand.hasMany(models.Product, {
     
        as: "products",
        foreignKey: "id_brand"

    })
}

return Brand;
}

module.exports = brandData