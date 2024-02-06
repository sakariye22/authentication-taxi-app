const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController.js');
const { loginUser } = require('../controllers/userController');
//const { registerDriver } = require('../controllers/driverController');
const { registerDriver, loginDriver ,logoutDriver} = require('../controllers/driverController');

router.post('/register/user', registerUser);
router.post('/login/user', loginUser);

//router.post('/register/driver', registerDriver);
router.post('/register/driver', registerDriver);
router.post('/login/driver', loginDriver);
router.post('/logout-driver',logoutDriver);

module.exports = router;
