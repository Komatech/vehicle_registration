const res = require('express/lib/response');
const model = require('./../models');
const{userSchema,loginSchema} = require('../validate');


exports.get_allUsers = async function(req,res){
    try {
        const users = await model.User.findAll({attributes:['id','firstName','lastName','middleName','email']});
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({message:error})
        console.log('Not successful')
    }

}

exports.get_oneUser = async function(req,res){
    try {

        const user = await model.User.findOne({
            where:{
                id:req.params.id
            }
        });

        const profile = await model.Profile.findOne({
            where:{
                id:req.params.id
            }
        });

        const kin = await model.Kin.findOne({
            where:{
                id:req.params.id
            }
        });

        const vehicle = await model.Vehicle.findOne({
            where:{
                id:req.params.id
            }
        });
        console.log(req.user)
        res.status(200).json({
                "User":{
                    "firstName": user.firstName,
                    "middleName":user.middleName,
                    "lastName":user.lastName,
                    "email":user.email,
                },
                "Profile": profile,
                "Kin":kin,
                "Vehicle":vehicle})
    } catch (error) {
        res.status(400).json({message:error})
        console.log('Not successful')
    }
}

exports.update_profile = async function(req,res){
    try {      
        
        const profile = await model.Profile.update({
            address: req.body.address,
            telNo: req.body.telNo,
            bvn: req.body.bvn,
            bloodGroup: req.body.bloodGroup,
            stateOrigin: req.body.stateOrigin,
            town: req.body.town,
            lga: req.body.lga,
            dob: req.body.dob,
            occupation: req.body.occupation,
            scn: req.body.scn,
            dln: req.body.dln,
            smartCard: req.body.smartCard,
            issuedDate: req.body.issuedDate,
            expiredDate: req.body.expiredDate,
        },{
            where:{
                id:req.params.id
            }
        })
        res.send('success')
    } catch (error) {
        res.json({message:error})
        console.log('Not successful')
    }
}

exports.update_kin = async function(req,res){
    try {      
        
        const kin = await model.Kin.update({
            firstName:req.body.firstName,
            middleName:req.body.middleName,
            lastName:req.body.lastName,
            email:req.body.email,
            address:req.body.address,
            origin:req.body.origin,
            relationship:req.body.relationship,
            lga:req.body.lga,
            town:req.body.town,
            mobile:req.body.mobile,
            phone:req.body.phone,
            bvn:req.body.bvn
        },{
            where:{
                id:req.params.id
            }
        })
        res.send('success')
    } catch (error) {
        res.json({message:error})
        console.log('Not successful')
    }
}

exports.update_vehicle = async function(req,res){
    try {      
        
        const vehicle = await model.Kin.update({
            vin:req.body.vin,
            engine:req.body.engine,
            frontAxle:req.body.frontAxle,
            rearAxle:req.body.rearAxle,
            transmissionNo:req.body.transmissionNo,
            transmissionType:req.body.transmissionType,
            steeringboxNo:req.body.steeringboxNo,
            steeringPosition:req.body.steeringPosition,
            ignitionType:req.body.ignitionType,
            exteriorColor:req.body.exteriorColor,
            interiorColor:req.body.interiorColor,
            modelVersion:req.body.modelVersion,
            salesDesig:req.body.salesDesig,
            productOrder:req.body.productOrder,
            bodyType:req.body.bodyType,
            vehicleType:req.body.vehicleType,
            vehicleMake:req.body.vehicleMake,
            fuelType:req.body.fuelType,
            tankCapacity:req.body.tankCapacity,
            productionDate:req.body.productionDate,
            licenseNo:req.body.licenseNo,
            purchaseDate:req.body.purchaseDate,
            dealer:req.body.dealer,
            dealerPhone:req.body.dealerPhone,
            trailerHitch:req.body.trailerHitch,
            dealerAddress:req.body.dealerAddress,
        },{
            where:{
                id:req.params.id
            }
        })
        res.send('success')
    } catch (error) {
        res.json({message:error})
        console.log('Not successful')
    }
}
