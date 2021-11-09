const db = require('./firebase.js');

// get all users from Users collections
function getUsers(){
    return db.collection('Users').get()
        .then((users)=>{
            users.forEach(user=>{
                console.log(user.id, '=>', user.data());
            });
        })
        .catch((err)=>{
            console.log(`error to get Users ${err}`);
        })
}

module.exports = {
    getUsers
}