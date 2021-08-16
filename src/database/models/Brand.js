function brandData (sequelize, dataTypes) {

    alias = "brand";

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


const categories = sequelize.define (alias, cols, config);

return categories;
}

module.exports = brandData