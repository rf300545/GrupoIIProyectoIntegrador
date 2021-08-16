module.exports = (sequelize, DataTypes) => {

   let alias = "Brand";

   let cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre : {
            type: DataTypes.STRING(200),
            
        }
    }

    let config = {
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
