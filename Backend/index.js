const express = require('express');
const app = express();
const port = 5000;
const APIRoutes = require('./routes');
const cors = require('cors');

app.use(express.static('public'))
app.use(express.json());
app.use(cors());


APIRoutes(app);

app.listen(port);


