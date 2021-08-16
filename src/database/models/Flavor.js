function flavorData (sequelize, dataTypes) {

    alias = "flavor";

    cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoincrement: true
        },
        nombre : {
            type: dataTypes.STRING(200),
            
        }
    }

    config = {
        tableName: "flavor",
        timestamps: false
    };



const flavors = sequelize.define (alias, cols, config);
return flavors 
}

module.exports = flavorData; 