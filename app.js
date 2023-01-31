const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const PORT = 8080;

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use('/feed', feedRoutes);

mongoose
    .set('strictQuery', false)
    .connect('mongodb://localhost:27017/blog')
    .then(result => {
        app.listen(PORT, () => {
            console.log(`server started on http://localhost:${PORT}`);
        })
    })
    .catch(err => {
        console.log(err);
    })