'use strict'

const { Sequelize, DataTypes } = require("sequelize/dist")

module.exports = (Sequelize,DataTypes) =>{
    const Designation = Sequelize.define('Designation',{
        id:{type: DataTypes.INTEGER,autoIncrement: true,primaryKey: true,},
        role_id:{type: DataTypes.INTEGER,allowNull: false,},
        user_id:{type: DataTypes.INTEGER,allowNull: false,},
        createdAt:{allowNull:false,type:DataTypes.DATE,defaultValue: DataTypes.NOW},
    })

    return Designation
}