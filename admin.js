const express = require('express');

const router = express.Router();



router.get('/addProduct', (req, res, next) =>{
    console.log('Inside the addProduct middleware!');
    res.send('<form action = "/admin/product" method = "POST"><div><label for="name">Product Name:</label><input type = "text" name = "productName" ><br><button type = "submit">Add product</button></div></form>');
})

router.post('/product', (req, res, next) =>{
    let reqbody = req.body;
    console.log(reqbody);
    res.redirect('/shop');
})


module.exports = router;