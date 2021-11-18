const express = require('express');
const dbU = require('../src/db/crudUsers.js');
const router = express.Router();

router.get('/', function(req, res) {
    dbU.getUsers(function(arrayUsers) {
        res.send(arrayUsers);
    });
});

router.get('/:id', function(req, res) {
    const userId = req.params.id;
    dbU.getUser(userId, function(user) {
        res.json(user);
    })
})

router.post('/', function(req, res){
    const user = req.body;
    dbU.addUser(user, (response) => {
        res.send(response);
    })
})

router.put('/:id', function(req, res){
    const id = req.params.id;
    const user = req.body;
    dbU.updateUserTotally(id, user, (response) => {
        res.send(response);
    })
})

router.patch('/:id', function(req, res){
    const id = req.params.id;
    const user = req.body;
    dbU.updateUserParcial(id, user, (response) => {
        res.send(response);
    })
})

router.delete('/:id', function(req, res){
    const id = req.params.id;
    dbU.deleteUser(id, (response) => {
        res.send(response);
    })
})

module.exports = router;

