function categoryData (sequelize, dataTypes) {

    alias = "category";

    cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre : {
            type: dataTypes.STRING(300),
            
        }
    }

    config = {
        tableName: "g2.category",
        timestamps: false
    };


const categories = sequelize.define (alias, cols, config);

return categories;
}

module.exports = categoryData; 