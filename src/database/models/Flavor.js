function flavorData (sequelize, dataTypes) {

    alias = "flavor";

    cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoincrement: true
        },
        nombre : {
            type: dataTypes.STRING(300),
            
        }
    }

    config = {
        tableName: "g2.flavor",
        timestamps: false
    };



const flavors = sequelize.define (alias, cols, config);

flavors.associate = function  (models){
    flavors.hasMany (models.Product) { // poner el nombre del modelo de productos (elio)
        as 

    }



};

module.exports = flavorData; 