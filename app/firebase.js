import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCT42q7muuz_LnZlKrfW7HBvVzgQ74hEN4',
    authDomain: 'reactauthrouter.firebaseapp.com',
    databaseURL: 'https://reactauthrouter.firebaseio.com',
    storageBucket: 'reactauthrouter.appspot.com',
    messagingSenderId: '864224205931'
  };

export const firebaseApp = firebase.initializeApp(config);
