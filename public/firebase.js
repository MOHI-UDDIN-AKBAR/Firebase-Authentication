// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA4Q-s4upfsN9gZzS5BTrVnENtxbDZXicQ",
    authDomain: "fir-authentication-bbe26.firebaseapp.com",
    projectId: "fir-authentication-bbe26",
    storageBucket: "fir-authentication-bbe26.appspot.com",
    messagingSenderId: "578439537033",
    appId: "1:578439537033:web:92be96ee5f50bb24f18158",
    measurementId: "G-DC8EWMXQPH"
};
// firebase.initializeApp(firebaseConfig);
// // firebase.getAnalytics();
// // firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
firebase.auth();
// console.log(auth)
// const analytics = getAnalytics(app);