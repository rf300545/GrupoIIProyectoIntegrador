function userData (sequelize, dataTypes) {

    alias = "User";

    cols = {
        id : {
            type: dataTypes.INTERGER,
            primaryKey: true,
            autoIncrement: true
            },
        nombre : {
            type: dataTypes.STRING(200),          
            },        
        apellido:{
            type: dataTypes.STRING (200)
            },
        email:{
            type: dataTypes.STRING (200)
        },
        telefono: {
            type: dataTypes.INTERGER
        },
        contrasenia:{
            type: dataTypes.STRING (200)
        },
        avatar: {
            type: dataTypes.STRING (200)
        },
        id_direccion: {
            type: dataTypes.INTERGER
        },
      
        
    }

    config = {
        tableName: "user",
        timestamps: false
    };


const User = sequelize.define (alias, cols, config);
User.associate = function (models) {

    Product.hasMany(models.User,{
        as: "products",
        through: "product_user",
        foreignKey: "id_product",
        otherKey: "id_user",
        timestamps: false, 

    });

}
return User ;
}

module.exports = userData; 