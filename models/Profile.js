'use strict'

const { Sequelize, DataTypes } = require("sequelize/dist")

module.exports = (Sequelize,DataTypes) =>{
    var Profile = Sequelize.define('Profile',{
        id:{type: DataTypes.INTEGER,autoIncrement: true,primaryKey: true,},
        user_id:{type:DataTypes.INTEGER,allowNull:false,},
        address:{type: DataTypes.STRING,allowNull: true,},
        telNo:{type: DataTypes.STRING,allowNull: true,},
        bvn:{type: DataTypes.STRING,allowNull: true,},
        bloodGroup:{type: DataTypes.STRING,allowNull: true,},
        stateOrigin:{type: DataTypes.STRING,allowNull: true,},
        town:{type: DataTypes.STRING,allowNull: true,},
        lga:{type: DataTypes.STRING,allowNull: true,},
        dob:{type: DataTypes.DATE,allowNull: true,},
        occupation:{type: DataTypes.STRING,allowNull: true,},
        scn:{type: DataTypes.STRING,allowNull: true,},
        dln:{type: DataTypes.STRING,allowNull: true,},
        smartCard:{type: DataTypes.STRING,allowNull: true,},
        issuedDate:{type: DataTypes.DATE,allowNull: true,},
        expiredDate:{type: DataTypes.DATE,allowNull: true,},
        createdAt:{allowNull:false,type:DataTypes.DATE,defaultValue: DataTypes.NOW},
})
    return Profile
}