const express = require('express');
const app = express();
const router = express.Router();
const {createPasteBin} = require('../controller/pasteBinController')

router.post('/paste', createPasteBin)


module.exports = router