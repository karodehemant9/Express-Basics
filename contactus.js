const express = require('express');
const path = require('path');
const router = express.Router();

//const rootDir = require('../util/path.js');



router.get('/contactus', (req, res, next) =>{
    console.log('Inside the addProduct middleware!');
    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
})

router.post('/success', (req, res, next) =>{
    res.sendFile(path.join(__dirname,'../','views','success.html'));
})


module.exports = router;