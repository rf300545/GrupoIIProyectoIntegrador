function categoryData (sequelize, dataTypes) {

    alias = "Category";

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
        tableName: "category",
        timestamps: false
    };


const Category = sequelize.define (alias, cols, config);

Category.associate = function (models) {

    Category.hasMany(models.Product, {
        
        as: "producto",
        foreignKey: "id_category"

    })
}


return Category;
}

module.exports = categoryData; 