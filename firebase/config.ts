import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDYjLl9qMjSTg5aYFvgpRuPi9mWrOcIekc',
    authDomain: 'react-firegram-b7417.firebaseapp.com',
    databaseURL: 'https://react-firegram-b7417.firebaseio.com',
    projectId: 'react-firegram-b7417',
    storageBucket: 'react-firegram-b7417.appspot.com',
    messagingSenderId: '85292186735',
    appId: '1:85292186735:web:f2784aad0941f36815e19a'
};

firebase.initializeApp(firebaseConfig);

const imageStorage = firebase.storage();
const imageFireStorage = firebase.firestore();

export { imageFireStorage, imageStorage };
