'use strict'

const { Sequelize, DataTypes } = require("sequelize/dist")

module.exports = (Sequelize,DataTypes) =>{
    const Role = Sequelize.define('Role',{
        id:{type: DataTypes.INTEGER,autoIncrement: true,primaryKey: true,},
        name:{type: DataTypes.STRING,allowNull: false,},
        createdAt:{allowNull:false,type:DataTypes.DATE,defaultValue: DataTypes.NOW},
    })

    return Role
}