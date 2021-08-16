function flavorData (sequelize, dataTypes) {

    alias = "Flavor";

    cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoincrement: true
        },
        nombre : {
            type: dataTypes.STRING(200),
            
        }
    },

    config = {
        tableName: "flavor",
        timestamps: false
    };



const Flavor = sequelize.define (alias, cols, config);

Flavor.associate = function (models){
    Flavor.hasMany (models.Product, {
        as: "flavors",
        through: "product_flavor",
        foreignKey: "id_flavor",
        otherKey: "id_product",
        timestamps: false,

    });

}
return flavors 
}

module.exports = flavorData; 