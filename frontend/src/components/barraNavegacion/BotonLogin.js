// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {addUser, getUser} from '../../apis/UsersCRUD';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyCgBNzhfcVU02SJirUIjPOsIKgldrlnOg4",
    authDomain: "mensajeria-808b2.firebaseapp.com",
    projectId: "mensajeria-808b2",
    storageBucket: "mensajeria-808b2.appspot.com",
    messagingSenderId: "686037978363",
    appId: "1:686037978363:web:71d557d9183fa5dbe8b45e",
    measurementId: "G-C2QRVRX4S3"
    // ...
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: '/',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],

    callbacks:{
        signInSuccessWithAuthResult: (result) => {
            const obj = {
                "nombre": result.user.displayName,
                "id": result.user.uid,
                "cedula":'',
                "email": result.user.email,
                "celular": (result.user.phoneNumber===null)?'':result.user.phoneNumber,
                "foto": result.user.photoURL,
                "direccion":'',
                "servicios":[]
            };
            //verificamos si es un usuario nuevo
            if(result.additionalUserInfo.isNewUser){
                addUser(obj, (response)=>{
                    console.log(response);
                });
            }
            getUser(result.user.uid, (response)=>{
                localStorage.setItem('user', JSON.stringify(response.data));
                localStorage.setItem('id', result.user.uid);
                console.log();
                console.log();
                console.log();
            });
            
            return true;
            
            
        },
    },
};



const BotonLogin = () => {
    return (
        <>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </>
    )
}

export default BotonLogin
