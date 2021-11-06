// This route must be controlled by the index route as it is the master 


const express = require('express');
const router = express.Router();

const userController = require('../controllers/users_controller');

router.get('/profile',userController.profile);   // Mapping the routr with a controller 





module.exports = router ;
