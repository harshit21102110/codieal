// base file for different routes 
const express = require('express');


const router = express.Router();   // Diff routers

const homeComatroller =require('../controllers/home_controller');  // requiring the home controller 

router.get('/',homeComatroller.home);           // Simialr to app.get in normal express app
router.use('/users',require('./users'));  // Anything with users as router then use users route 



module.exports=router ;