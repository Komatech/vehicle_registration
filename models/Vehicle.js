'use strict'

const { Sequelize, DataTypes } = require("sequelize/dist")

module.exports = (Sequelize,DataTypes) =>{
    var Vehicle = Sequelize.define('Vehicle',{
        id:{type: DataTypes.INTEGER,autoIncrement: true,primaryKey: true,},
        user_id:{type:DataTypes.INTEGER,allowNull:false,},
        vin:{type: DataTypes.STRING,allowNull: true},
        engine:{type: DataTypes.STRING,allowNull: true},
        frontAxle:{type: DataTypes.STRING,allowNull: true},
        rearAxle:{type: DataTypes.STRING,allowNull: true},
        transmissionNo:{type: DataTypes.STRING,allowNull: true},
        transmissionType:{type: DataTypes.STRING,allowNull: true},
        steeringboxNo:{type: DataTypes.INTEGER,allowNull: true},
        steeringPosition:{type: DataTypes.STRING,allowNull: true},
        ignitionType:{type: DataTypes.STRING,allowNull: true},
        exteriorColor:{type: DataTypes.STRING,allowNull: true},
        interiorColor:{type: DataTypes.STRING,allowNull: true},
        modelVersion:{type: DataTypes.STRING,allowNull: true},
        salesDesig:{type: DataTypes.STRING,allowNull: true},
        productOrder:{type: DataTypes.STRING,allowNull: true},
        bodyType:{type: DataTypes.STRING,allowNull: true},
        vehicleType:{type: DataTypes.STRING,allowNull: true},
        vehicleMake:{type: DataTypes.STRING,allowNull: true},
        fuelType:{type: DataTypes.STRING,allowNull: true},
        tankCapacity:{type: DataTypes.STRING,allowNull: true},
        productionDate:{type: DataTypes.DATE,allowNull: true},
        licenseNo:{type: DataTypes.STRING,allowNull: true},
        purchaseDate:{type: DataTypes.DATE,allowNull: true},
        dealer:{type: DataTypes.STRING,allowNull: true},
        dealerPhone:{type: DataTypes.STRING,allowNull: true},
        trailerHitch:{type: DataTypes.STRING,allowNull: true},
        dealerAddress:{type: DataTypes.STRING,allowNull: true,},
        createdAt:{allowNull:false,type:DataTypes.DATE,defaultValue: DataTypes.NOW},
    })

    return Vehicle
}