const express = require('express');
const app = express();
const router = express.Router();
const {createPasteBin , getPasteBin} = require('../controller/pasteBinController')

router.post('/paste', createPasteBin);

router.get('/:code', getPasteBin)


module.exports = router