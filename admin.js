const express = require('express');
const path = require('path');
const router = express.Router();

//const rootDir = require('../util/path.js');



router.get('/addProduct', (req, res, next) =>{
    console.log('Inside the addProduct middleware!');
    res.sendFile(path.join(__dirname,'../','views','addProduct.html'));
})

router.post('/product', (req, res, next) =>{
    let reqbody = req.body;
    console.log(reqbody);
    res.redirect('/shop');
})


module.exports = router;