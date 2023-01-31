const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');

const PORT = 8080;

const app = express();

app.use(bodyParser.json());

app.use('/feed', feedRoutes);

app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
})