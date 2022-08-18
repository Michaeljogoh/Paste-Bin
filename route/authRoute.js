const express = require('express');
const app = express();
const router = express.Router();
const {register , login} = require('../controller/authController')

router.post('/register', register);

router.post('/login', login);

module.exports = router


