import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyDD9c8W_ukadI7TO05uzrY1gz8CvVdpVOg",
    authDomain: "chat-web-app-ff759.firebaseapp.com",
    projectId: "chat-web-app-ff759",
    storageBucket: "chat-web-app-ff759.appspot.com",
    messagingSenderId: "782356133864",
    appId: "1:782356133864:web:ef558906739cea4b16965d",
    databaseURL:' https://chat-web-app-ff759-default-rtdb.europe-west1.firebasedatabase.app'
  };

  // eslint-disable-next-line no-unused-vars
  const app = firebase.initializeApp(config);
  export const auth = app.auth();
  export const database = app.database();
  export const storage = app.storage();