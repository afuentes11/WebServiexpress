const db = require('./firebase.js');

// get all users from Users collections
function getUsers(callback) {
    return db.collection('Users').get()
        .then((users)=>{
            var arrayUsers = [];
            users.forEach(user=>{
                arrayUsers.push(user.data());
            });
            callback(arrayUsers);
        })
        .catch((err)=>{
            callback(`error to get Users ${err}`);
        })
}

function getUser(userId,callback){
    return db.collection('Users').doc(userId).get()
        .then((doc)=>{
            callback(doc);
        })
        .catch((err)=>{
            callback(`error to get users ${err}`);
        })
}

function addUser(user, callback) {
    return db.collection('Users').add(user)
        .then(()=>{
            callback('Expert create');
        })
        .catch((err)=>{
            callback(`error to add user ${err}`);
        })
}

function updateUserTotally(userId,user,callback) {
    return db.collection('Users').doc(userId).set(user)
        .then(()=>{
            callback("Success")
        })
        .catch((err)=>{
            callback(`error to update Totally user ${err}`);
        })
}

function updateUserParcial(userId,user,callback) {
    return db.collection('Users').doc(userId).update(user)
        .then(()=>{
            callback("Success")
        })
        .catch((err)=>{
            callback(`error to update parcial user ${err}`);
        })
}

function deleteUser(userId,callback){
    return db.collection('Users').doc(userId).delete()
        .then(()=>{
            callback("Success")
        })
        .catch((err)=>{
            callback(`error to delete user ${err}`);
        })
}

module.exports = {
    getUsers,
    getUser, 
    addUser,
    updateUserTotally,
    updateUserParcial,
    deleteUser,
}