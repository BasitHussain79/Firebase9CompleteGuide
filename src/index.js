import {initializeApp} from 'firebase/app';
import {getFirestore, addDoc, collection, getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4IygtpnAR1mKaxFQ90w_HteOHSTjWav4",
    authDomain: "fir-learning-8e336.firebaseapp.com",
    projectId: "fir-learning-8e336",
    storageBucket: "fir-learning-8e336.appspot.com",
    messagingSenderId: "958974190972",
    appId: "1:958974190972:web:d9bdd4c5ebbcba326f70f9"
};

// initialize
initializeApp(firebaseConfig);

const db = getFirestore();

const _collection = collection(db, 'students');

// add Doc
addDoc(_collection, {
        name: 'Subhan',
        depratment: 'CS',
})
.then(() => {
        console.log('Document Added');
})
.catch(err => {
        console.log(err)
});


// get Doc
getDocs(_collection)
    .then((snapshot) => {
        snapshot.forEach((snap) => {
            console.log(snap.data());
        })
    })
    .catch((err) => {
        console.log(err)
    });


