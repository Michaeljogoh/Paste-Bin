const express = require('express');
const router = express.Router();
const {createPasteBin , getPasteBin} = require('../controller/pasteBinController');
const {isLoggedIn} = require('../middleware/authorization')

router.post('/paste', isLoggedIn , createPasteBin);

router.get('/:code', isLoggedIn ,  getPasteBin)


module.exports = router