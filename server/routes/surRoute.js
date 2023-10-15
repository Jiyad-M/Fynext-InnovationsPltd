const express = require('express');
const router = express.Router();
const test = require('../controllers/test.js');
const surCtrl = require('../controllers/surCtrl.js');
const { revCtrlGet, revCtrlPost } = require('../controllers/revCtrl.js');



router.get("/test",test);
router.post("/",surCtrl);
router.post("/review",revCtrlPost);
router.get("/review",revCtrlGet);


module.exports= router;