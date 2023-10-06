const express = require('express');
const path = require('path');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const contactRoutes = require('./routes/contactus.js');

//const rootDir = require('../util/path.js');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));


app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);


app.use((req,res,next) =>{
    res.status(404);
    res.sendFile(path.join(__dirname,'views','error.html'));
})

app.listen(3000);

