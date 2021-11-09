//inicializar la conexion
const admin = require('firebase-admin');
const serviceAccount = require('./mensajeria-808b2-firebase-adminsdk-1708b-a66117146b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;