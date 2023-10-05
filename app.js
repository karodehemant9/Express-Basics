const http = require('http');
const express = require('express');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));



app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);


app.use((req,res,next) =>{
    res.status(404);
    res.send('<h2>Page not found</h2>');
})

app.listen(3000);

