const express = require('express');
const app = express();
const port = 3000;
const db = require('./src/db/crud.js');

app.use(express.static('public'))


app.get('/', function(req, res) {
    res.send('mi primer servidor express');
});

//crea unanueva ruta
app.get('/nueva-ruta', function(req, res) {
    res.send('mi primera ruta en express')
})

app.get('/Users', function(req, res) {
    res.json({
        "user1": 'Andres',
        'user2':'Fuentes'
    });
})

app.get('/user/:id', function(req, res) {
    const userID = req.params.id;
    //consulto en la base de datos y trajo un usuario
    res.send(userID +' andres fuentes');
})
app.listen(port);


