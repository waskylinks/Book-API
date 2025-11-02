const express = require('express');
const router = express.Router();
const{ registerUser, loginUser } = require('../Controllers/auth-controller');

//all routes are related to user authentication and authorization

router.post('/register', registerUser)
router.post('/login', loginUser)



module.exports = router;