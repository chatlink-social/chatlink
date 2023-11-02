import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";

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

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log('Utilisateur connecté:', user);

        // Rediriger l'utilisateur vers le site internet (index.html)
        window.location.href = 'choisir_avatar.html';
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erreur de connexion:', errorMessage);
    }
});

const authContainer = document.getElementById('auth-container');
onAuthStateChanged(auth, (user) => {
    if (user) {
        const avatarContainer = document.createElement('div');
        avatarContainer.className = 'avatar-container';
        const avatarImage = document.createElement('img');
        avatarImage.src = user.photoURL;
        avatarImage.alt = 'Avatar';
        avatarContainer.appendChild(avatarImage);

        authContainer.innerHTML = '';
        authContainer.appendChild(avatarContainer);
    } else {
        authContainer.innerHTML = '';
    }
});

