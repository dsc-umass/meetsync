// firebase/index.js
import firebase from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
  };
if (!firebase.apps.length) {
firebase.initializeApp(config);
}
const auth = firebase.auth();
export {
 auth,
 firebase
};