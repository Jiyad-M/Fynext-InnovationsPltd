const express = require('express');
const router = express.Router();
const test = require('../controllers/test.js');
const cors =require('cors');
const surCtrl = require('../controllers/surCtrl.js');
const { revCtrlGet, revCtrlPost } = require('../controllers/revCtrl.js');

router.use(
    cors({
        credentials:true,
        origin: 'http://localhost:3000'
    })
)

router.get("/test",test);
router.post("/",surCtrl);
router.post("/review",revCtrlPost);
router.get("/review",revCtrlGet);


module.exports= router;