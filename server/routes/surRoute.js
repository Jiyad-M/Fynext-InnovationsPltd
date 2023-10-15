const express = require('express');
const test = require('../controllers/test.js');
const surCtrl = require('../controllers/surCtrl.js');
const router = express.Router();


router.get("/test",test);
router.post("/",surCtrl);


module.exports= router;