'use strict'

const { Sequelize, DataTypes } = require("sequelize/dist")

module.exports = (Sequelize,DataTypes) =>{
    const User = Sequelize.define('User',{
        id:{type: DataTypes.INTEGER,autoIncrement: true,primaryKey: true,},
        firstName:{type: DataTypes.STRING,allowNull: false,},
        middleName:{type: DataTypes.STRING,allowNull: true,},
        lastName:{type: DataTypes.STRING,allowNull: false,},
        email:{type: DataTypes.STRING,allowNull: false,unique: true,},
        password:{type: DataTypes.STRING,allowNull: false,},
        createdAt:{allowNull:false,type:DataTypes.DATE,defaultValue: DataTypes.NOW},
    })

    return User
}





