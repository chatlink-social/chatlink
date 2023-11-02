import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "Votre_API_KEY",
    authDomain: "Votre_AUTH_DOMAIN",
    databaseURL: "Votre_DATABASE_URL",
    projectId: "Votre_PROJECT_ID",
    storageBucket: "Votre_STORAGE_BUCKET",
    messagingSenderId: "Votre_MESSAGING_SENDER_ID",
    appId: "Votre_APP_ID",
    measurementId: "Votre_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
