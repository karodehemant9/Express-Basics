const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) =>{
    console.log('Inside the first middleware!');
    next(); //Allows the request to continue to the next middleware in line/code
})

app.use((req, res, next) =>{
    console.log('Inside the second middleware!');
    res.send({ name: 'Hemant' });
})

app.listen(3000);

