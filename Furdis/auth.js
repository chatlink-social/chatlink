import { initializeApp } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
        import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
        import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.2.0/firebase-database.js";

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
        const database = getDatabase(app);

        const defaultAvatarURL = "/images/avatar/defaultAvatar.jpeg"; // Mettez ici l'URL de l'avatar par défaut
        const signupForm = document.getElementById('signup-form');

        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = signupForm.email.value;
            const password = signupForm.password.value;
            const username = signupForm.username.value;

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Enregistrer le pseudo dans les informations de l'utilisateur
                await user.updateProfile({
                    displayName: username
                });

                // Enregistrer l'URL de l'avatar par défaut dans la base de données
                await set(ref(database, `users/${user.uid}/avatar`), defaultAvatarURL);

                console.log('Utilisateur inscrit:', user);
                // Rediriger l'utilisateur vers la page de connexion
                window.location.href = 'connexion.html';
            } catch (error) {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Erreur d\'inscription:', errorMessage);
                window.location.href = 'connexion.html';
            }
        });