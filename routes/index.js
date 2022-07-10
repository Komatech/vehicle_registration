const { Router } = require('express');
const express = require('express');
const router = express.Router();
const createUser = require('../controllers/userProfile');
const verify = require('../routes/verifyToken');
const admin = require('../controllers/admin');

// Create new user
router.post('/create',createUser.create_newUser);

// login
router.post('/signin',createUser.loginUser);

// get specific user
router.get('/profile',verify,createUser.getCurrentuser);



// admin routes
// get all users
router.get('/all',verify,admin.get_allUsers);

// get specific user
router.get('/:id',verify,admin.get_oneUser);

// update profile
router.put('/edit_profile/:id',verify,admin.update_profile);

// update kin
router.put('/edit_kin/:id',verify,admin.update_kin);

// update vehicle
router.put('/edit_vehicle/:id',verify,admin.update_vehicle);

module.exports = router;