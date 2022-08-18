const express = require('express');
const app = express();
const router = express.Router();
const {createPasteBin , getPasteBin} = require('../controller/pasteBinController');
const {authToken} = require('../middleware/authorization')

router.post('/paste', authToken , createPasteBin);

router.get('/:code', authToken ,  getPasteBin)


module.exports = router