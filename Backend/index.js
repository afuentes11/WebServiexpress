const express = require('express');
const app = express();
const port = 3000;
const dbU = require('./src/db/crudUsers.js');

//app.use(express.static('public'))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('bienvenidos al servidor de ServiExpress')
})
app.get('/get-users', function(req, res) {
    dbU.getUsers(function(arrayUsers) {
        res.send(arrayUsers);
    });
});

app.get('/get-user/:id', function(req, res) {
    dbU.getUser(req.params.id, function(user) {
        res.json(user);
    })
})

app.post('/add-user', function(req, res){
    const user = req.body;
    dbU.addUser(user, (response) => {
        res.send(response);
    })
})

app.put('/update-user-tottaly/:id', function(req, res){
    const id = req.params.id;
    const user = req.body;
    dbU.updateUserTotally(id, user, (response) => {
        res.send(response);
    })
})

app.patch('/update-user-parcial/:id', function(req, res){
    const id = req.params.id;
    const user = req.body;
    dbU.updateUserParcial(id, user, (response) => {
        res.send(response);
    })
})

app.delete('/delete-user/:id', function(req, res){
    const id = req.params.id;
    dbU.deleteUser(id, (response) => {
        res.send(response);
    })
})

app.listen(port);


