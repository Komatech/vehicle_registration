'use strict'

const { QueryInterface, Sequelize } = require("sequelize/dist")


module.exports = {
    up:(QueryInterface,Sequelize)=>{
        return QueryInterface.createTable('User',{
            id:{type: Sequelize.INTEGER,autoIncrement: true,primaryKey: true,},
            firstName:{type: Sequelize.STRING,allowNull: false,},
            middleName:{type: Sequelize.STRING,allowNull: true,},
            lastName:{type: Sequelize.STRING,allowNull: false,},
            email:{type: Sequelize.STRING,allowNull: false,unique: true,},
            password:{type: Sequelize.STRING,allowNull: false,},
            createdAt:{allowNull:false,type:Sequelize.DATE,},
        }),
        QueryInterface.createTable('Profile',{
            id:{type: Sequelize.INTEGER,autoIncrement: true,primaryKey: true,},
            user_id:{type:Sequelize.INTEGER,allowNull:true,},
            address:{type: Sequelize.STRING,allowNull: true,},
            telNo:{type: Sequelize.INTEGER,allowNull: true,},
            bvn:{type: Sequelize.STRING,allowNull: true,},
            bloodGroup:{type: Sequelize.STRING,allowNull: true,},
            stateOrigin:{type: Sequelize.STRING,allowNull: true,},
            town:{type: Sequelize.STRING,allowNull: true,},
            lga:{type: Sequelize.STRING,allowNull: true,},
            dob:{type: Sequelize.DATE,allowNull: true,},
            occupation:{type: Sequelize.STRING,allowNull: true,},
            scn:{type: Sequelize.INTEGER,allowNull: true,},
            dln:{type: Sequelize.INTEGER,allowNull: true,},
            smartCard:{type: Sequelize.INTEGER,allowNull: true,},
            issuedDate:{type: Sequelize.DATE,allowNull: true,},
            expiredDate:{type: Sequelize.DATE,allowNull: true,},
            createdAt:{allowNull:false,type:Sequelize.DATE,},
        }),
        QueryInterface.createTable('Kin',{
            id:{type: Sequelize.INTEGER,autoIncrement: true,primaryKey: true},
            user_id:{type:Sequelize.INTEGER,allowNull:false},
            firstName:{type: Sequelize.STRING,allowNull: true,},
            middleName:{type: Sequelize.STRING,allowNull: true,},
            lastName:{type: Sequelize.STRING,allowNull: true,},
            email:{type: Sequelize.STRING,allowNull: true},
            address:{type: Sequelize.STRING,allowNull: true,},
            origin:{type: Sequelize.STRING,allowNull: true,},
            relationship:{type: Sequelize.STRING,allowNull: true,},
            lga:{type: Sequelize.STRING,allowNull: true,},
            town:{type: Sequelize.STRING,allowNull: true,},
            mobile:{type: Sequelize.INTEGER,allowNull: true,},
            phone:{type: Sequelize.INTEGER,allowNull: true,},
            bvn:{type: Sequelize.INTEGER,allowNull: true,},
            createdDate:{type: Sequelize.DATE,allowNull: false}
            
        }),
        QueryInterface.createTable('Vehicle',{
            id:{type: Sequelize.INTEGER,autoIncrement: true,primaryKey: true,},
            user_id:{type:Sequelize.INTEGER,allowNull:false,},
            vin:{type: Sequelize.INTEGER,allowNull: true,            },
            engine:{type: Sequelize.INTEGER,allowNull: true,},
            frontAxle:{type: Sequelize.INTEGER,allowNull: true,},
            rearAxle:{type: Sequelize.INTEGER,allowNull: true,},
            transmissionNo:{type: Sequelize.INTEGER,allowNull: true,},
            transmissionType:{type: Sequelize.STRING,allowNull: true,},
            steeringboxNo:{type: Sequelize.INTEGER,allowNull: true,},
            steeringPosition:{type: Sequelize.STRING,allowNull: true,},
            ignitionType:{type: Sequelize.STRING,allowNull: true,},
            exteriorColor:{type: Sequelize.STRING,allowNull: true,},
            interiorColor:{type: Sequelize.STRING,allowNull: true,},
            modelVersion:{type: Sequelize.STRING,allowNull: true,},
            salesDesig:{type: Sequelize.STRING,allowNull: true,},
            productOrder:{type: Sequelize.STRING,allowNull: true,},
            bodyType:{type: Sequelize.STRING,allowNull: true,},
            vehicleType:{type: Sequelize.STRING,allowNull: true,},
            vehicleMake:{type: Sequelize.STRING,allowNull: true,},
            fuelType:{type: Sequelize.STRING,allowNull: true,},
            tankCapacity:{type: Sequelize.INTEGER,allowNull: true,},
            productionDate:{type: Sequelize.DATE,allowNull: true,},
            licenseNo:{type: Sequelize.INTEGER,allowNull: true,},
            purchaseDate:{type: Sequelize.DATE,allowNull: true,},
            dealer:{type: Sequelize.STRING,allowNull: true,},
            dealerPhone:{type: Sequelize.INTEGER,allowNull: true,},
            trailerHitch:{type: Sequelize.STRING,allowNull: true,},
            dealerAddress:{type: Sequelize.STRING,allowNull: true,},
            createdAt:{allowNull:false,type:Sequelize.DATE,},
        });
    },
    down:(QueryInterface,Sequelize) => {
        return QueryInterface.dropTable('User'),QueryInterface.dropTable('Profile'),QueryInterface.dropTable('Kin'),QueryInterface.dropTable('Vehicle');
    }
};