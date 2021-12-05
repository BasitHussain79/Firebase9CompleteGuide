import {initializeApp} from 'firebase/app';
import {getFirestore, addDoc, collection, getDocs, doc, deleteDoc, onSnapshot, query, where, orderBy, serverTimestamp} from 'firebase/firestore';

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

// get Doc
// getDocs(_collection)
//     .then((snapshot) => {
//         let student = [];
//         snapshot.forEach((snap) => {
//             console.log(snap.id, snap.data());
//             student.push({id: snap.id, ...snap.data() })
//             console.log(student);
//         })
//     })
//     .catch((err) => {
//         console.log(err)
//     });

const _query = query(_collection, where('name', '==', 'Huzaifa'), orderBy('tech', 'desc'));

onSnapshot(_query, (snapshot) => {
    let student = [];
    snapshot.forEach((doc) => {
        console.log(doc.id, doc.data());
        student.push({id: doc.id, ...doc.data()});
        console.log(student);
    })
})


const addStudentForm = document.querySelector('.addStudent');
addStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addDoc(_collection, {
        name: addStudentForm.name.value,
        tech: addStudentForm.tech.value,
        timestamp: serverTimestamp(),
    })
    .then(() => {
        addStudentForm.reset();
        console.log('Student Added');
    })
    .catch(err => {
        console.log(err);
    })
});


const deleteStudentForm = document.querySelector('.removeStudent');
deleteStudentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const docRef = doc(db, 'students', deleteStudentForm.id.value);
    deleteDoc(docRef)
    .then(() => {
        deleteStudentForm.reset();
        console.log('Student removed!');
    })
    .catch((err) => {
        console.log(err);
    });
})
