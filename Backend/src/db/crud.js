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

module.exports = {
    getUsers
}