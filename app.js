const http = require('http');
const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/addProduct', (req, res, next) =>{
    console.log('Inside the addProduct middleware!');
    res.send('<form action = "/product" method = "POST"><div><label for="name">Product Name:</label><input type = "text" name = "productName" ><br><label for="name">Product size:</label></input><input type = "text" name = "size" ></input><br><button type = "submit">Add product</button></div></form>');
})

app.post('/product', (req, res, next) =>{
    let reqbody = req.body;
    console.log(reqbody.productName);
    console.log(reqbody.size);
    res.send(`<h3>Product name is : ${reqbody.productName}</h3>
    <h3>Product size is : ${reqbody.size}</h3>
    `);
})

app.use('/', (req, res, next) =>{
    console.log('Inside the first middleware!');
    res.send('<h1>Hello from Express.js!</h1>');
})

app.listen(3000);

