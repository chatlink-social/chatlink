import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js';

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

const connexionButton = document.getElementById('connexionButton');
const inscriptionButton = document.getElementById('inscriptionButton');
const authForms = document.getElementById('auth-forms');
const confirmationMessage = document.getElementById('confirmationMessage');
const afirmationMessage = document.getElementById('afirmationMessage');

connexionButton.addEventListener('click', () => {
    authForms.classList.remove('hidden');
    confirmationMessage.classList.add('hidden');
    afirmationMessage.classList.add('hidden');
    document.getElementById('connexionForm').classList.remove('hidden');
    document.getElementById('inscriptionForm').classList.add('hidden');
});

inscriptionButton.addEventListener('click', () => {
    authForms.classList.remove('hidden');
    confirmationMessage.classList.add('hidden');
    afirmationMessage.classList.add('hidden');
    document.getElementById('inscriptionForm').classList.remove('hidden');
    document.getElementById('connexionForm').classList.add('hidden');
});

const connexionForm = document.getElementById('connexionForm');
const emailConnexion = document.getElementById('emailConnexion');
const passwordConnexion = document.getElementById('passwordConnexion');

connexionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailConnexion.value;
    const password = passwordConnexion.value;

    // Ajoutez ici le code pour la connexion
});

const inscriptionForm = document.getElementById('inscriptionForm');
const usernameInscription = document.getElementById('usernameInscription');
const emailInscription = document.getElementById('emailInscription');
const passwordInscription = document.getElementById('passwordInscription');

inscriptionForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInscription.value;
    const password = passwordInscription.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Nouvel utilisateur créé avec succès
            const user = userCredential.user;
            confirmationMessage.classList.remove('hidden');
        })
        .catch((error) => {
            // Gestion des erreurs d'inscription
            const user = userCredential.user;
            afirmationMessage.classList.remove('hidden');
        });
});
