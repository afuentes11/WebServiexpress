import axios from 'axios';
const URL= 'https://serviexpress-backend-prueba.herokuapp.com/users'; 

export function addUser(user,callback){
    axios.post(URL,user)
    .then((response) => {
        callback(response);
    })
    .catch((err) => {
        callback(err);
    })
}

export function getUser(userID, callback){
    axios.get(URL+'/'+userID)
    .then((response) => {
        callback(response);
    })
    .catch((err) => {
        callback(err);
    })
}

export function updateUserTotally(userID, user, callback){
    axios.put(URL+'/'+userID, user)
    .then((response) => {
        callback(response);
    })
    .catch((err) => {
        callback(err);
    })
}

