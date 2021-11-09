const express = require('express');
const app = express();
const port = 3000;
const db = require('./src/db/crud.js');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('bienvenidos al servidor de ServiExpress')
})
app.get('/get-users', function(req, res) {
    db.getUsers(function(arrayUsers) {
        res.send(arrayUsers);
    });
});

app.listen(port);


