//inicializar la conexion
const admin = require('firebase-admin');
const serviceAccount = require('./mensajeria-808b2-firebase-adminsdk-1708b-a66117146b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


switch('read'){
    case 'create':
        //creacion de un usuario
        db.collection("Users").add({
            name: "Andres Fuentes",
            DNI: 1192813825,
            services: [],
            cel: '3043557981',
            address: 'calle 7 #14-22'  
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
        break;
    
    case 'read':
        db.collection('Users').doc("TyTlplQsk9YQfqFb9gkZ").get()
        .then((doc) => {
            if(doc.exists){
                console.log(doc.data());
            }else{
                console.log("Document not found");
            }
        })
        .catch((error) => {
            console.error("Error reading document: ", error);
        })

}

