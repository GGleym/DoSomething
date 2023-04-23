import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: 'AIzaSyDSlAKN0VBFuMXD6qILWBnbKrCe1Yfx1Mg',
    authDomain: 'dosomething-b1f85.firebaseapp.com',
    databaseURL:
        'https://dosomething-b1f85-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'dosomething-b1f85',
    storageBucket: 'dosomething-b1f85.appspot.com',
    messagingSenderId: '1018088910041',
    appId: '1:1018088910041:web:2149fbc3eb1bff95fae2c8'
}

export const app = initializeApp(firebaseConfig)
export const database = getFirestore(app)

