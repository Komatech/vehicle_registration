const res = require('express/lib/response');
const model = require('./../models');
const{userSchema,loginSchema} = require('../validate');
const bcrypt = require('bcryptjs/dist/bcrypt');
const jwt = require('jsonwebtoken');


exports.loginUser = async function(req,res){
    try{
        // validate
        const {error} = loginSchema(req.body)

        if(error){
            return res.status(400).send(error.details[0].message)
        }
        else{
            // Check if email exists
            const user = await model.User.findOne({where:{email:req.body.email}})
            console.log("Email:"+" "+user)
           
            if(!user) return res.status(400).send('User does not exist')      

            //check password
            const validPassword = await bcrypt.compare(req.body.password,user.password)
            if(!validPassword){
                return res.status(400).send('Invalid password')
            }
            
            // Create and assign token
            const token = jwt.sign({id:user.id},process.env.TOKEN_SECRET);
            res.header('auth-token',token).send(token);
    }
}
    catch(error){
        res.json({message:error})
        console.log('Not successful')
        console.log(error)
    }

}

exports.create_newUser = async function(req,res){
    try {
        // Validate 
        const {error} = userSchema(req.body)
        if(error){
            return res.status(400).send(error.details[0].message)
        }
        else{
            // Check if email exists
            const emailExist = await model.User.findOne({where:{email:req.body.email}})
            console.log("Email:"+" "+emailExist)
            if(emailExist) return res.status(400).send('Email already exists')      

            //Hash password
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(req.body.password,salt)
            console.log("password:"+" "+hashPassword)

            // Insert data in database
            const user = await model.User.create({
                firstName:req.body.firstName,
                middleName:req.body.middleName,
                lastName:req.body.lastName,
                email:req.body.email,
                password:hashPassword
            })
    
            const profile = await model.Profile.create({
                user_id:user.id
            })
    
            const kin = await model.Kin.create({
                user_id:user.id
            })
    
            const vehicle = await model.Vehicle.create({
                user_id:user.id
            })

            res.status(200).json({"User":{"firstName": user.firstName,
                                            "lastName": user.lastName,
                                            "middleName": user.middleName,
                                            "email": user.email,}})
        }
        
        
        
    } catch (error) {
        res.json({message:error})
        console.log('Not successful')
        console.log(error)
    }
}


exports.getCurrentuser = async function(req,res){
    try {
        
        const user = await model.User.findOne({
            where:{
                id:req.user.id
            }
        });
        console.log(user)
        const profile = await model.Profile.findOne({
            where:{
                id:req.user.id
            }
        });

        const kin = await model.Kin.findOne({
            where:{
                id:req.user.id
            }
        });

        const vehicle = await model.Vehicle.findOne({
            where:{
                id:req.user.id
            }
        });
        // console.log(req.user.id)
        res.status(200).json({
                "User":{
                    "firstName": user.firstName,
                    "middleName":user.middleName,
                    "lastName":user.lastName,
                    "email":user.email,
                },
                "Profile": profile,
                "Kin":kin,
                "Vehicle":vehicle
            })
    } catch (error) {
        res.status(400).json({message:error})
        console.log('Not successful')
    }
}
