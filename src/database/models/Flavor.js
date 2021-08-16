module.exports = (sequelize, DataTypes) =>  {

    alias = "Flavor";

    cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoincrement: true
        },
        nombre : {
            type: DataTypes.STRING(200),
            
        }
    },

    config = {
        tableName: "flavor",
        timestamps: false
    };



const Flavor = sequelize.define (alias, cols, config);

Flavor.associate = function (models){
    Flavor.belongsToMany (models.Product, {
        as: "productos",
        through: "product_flavor",
        foreignKey: "id_flavor",
        otherKey: "id_product",
        timestamps: false,

    });

}
return Flavor
}

