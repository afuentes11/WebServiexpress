const express = require('express');
const router = express.Router();
const usersMockDB = require('./mockUsers.json') 

router.get('/', function(req, res) {
    res.send(usersMockDB)
});

router.get('/:id', function(req, res) {
    res.send()
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