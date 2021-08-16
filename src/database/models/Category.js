module.exports= (sequelize, DataTypes)=> {

    alias = "Category";

    cols = {
        id : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre : {
            type: DataTypes.STRING(200),
            
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

