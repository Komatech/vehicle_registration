'use strict'

const { Sequelize, DataTypes } = require("sequelize/dist")

module.exports = (Sequelize,DataTypes) =>{
    var Kin = Sequelize.define('Kin',{
        id:{type: DataTypes.INTEGER,autoIncrement: true,primaryKey: true},
        user_id:{type:DataTypes.INTEGER,allowNull:false},
        firstName:{type: DataTypes.STRING,allowNull: true,},
        middleName:{type: DataTypes.STRING,allowNull: true,},
        lastName:{type: DataTypes.STRING,allowNull: true,},
        email:{type: DataTypes.STRING,allowNull: true},
        address:{type: DataTypes.STRING,allowNull: true,},
        origin:{type: DataTypes.STRING,allowNull: true,},
        relationship:{type: DataTypes.STRING,allowNull: true,},
        lga:{type: DataTypes.STRING,allowNull: true,},
        town:{type: DataTypes.STRING,allowNull: true,},
        mobile:{type: DataTypes.STRING,allowNull: true,},
        phone:{type: DataTypes.STRING,allowNull: true,},
        bvn:{type: DataTypes.STRING,allowNull: true,},
        createdDate:{type: DataTypes.DATE,allowNull: true,defaultValue: DataTypes.NOW}
    })

    return Kin
}