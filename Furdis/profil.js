import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js';

const firebaseConfig = {
    apiKey: "AIzaSyADQaCmgSResQZwjEVc4_urPtmrHA4XfBQ",
    authDomain: "furdis-5ed02.firebaseapp.com",
    databaseURL: "https://furdis-5ed02-default-rtdb.firebaseio.com",
    projectId: "furdis-5ed02",
    storageBucket: "furdis-5ed02.appspot.com",
    messagingSenderId: "903306743411",
    appId: "1:903306743411:web:db5f4f6f6eb3fccce2e406",
    measurementId: "G-5QF5VH3STM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

const profilForm = document.getElementById('profil-form');
profilForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = profilForm['username'].value;
    const photo = profilForm['photo'].files[0];

    if (!username || !photo) {
        console.error('Veuillez remplir tous les champs.');
        return;
    }

    // Récupérez l'ID de l'utilisateur actuellement connecté
    const user = auth.currentUser;

    if (user) {
        // Créez une référence au document de l'utilisateur dans Firestore en utilisant son ID
        const userDoc = doc(firestore, 'users', user.uid);

        // Enregistrez les données de l'utilisateur dans Firestore avec l'ID de l'utilisateur comme identifiant du document
        await setDoc(userDoc, {
            username: username,
            // Vous pouvez stocker d'autres données ici, comme l'URL de la photo de profil
        });

        console.log('Profil enregistré avec succès.');

        // Redirigez l'utilisateur vers une autre page (par exemple, la page d'accueil)
        window.location.href = 'index.html';
    } else {
        console.error('Aucun utilisateur connecté.');
    }
});
