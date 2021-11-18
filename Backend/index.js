const express = require('express');
const app = express();
const port = 3000;
const APIRoutes = require('./routes');

app.use(express.static('public'))
app.use(express.json());

APIRoutes(app);

app.listen(port);


