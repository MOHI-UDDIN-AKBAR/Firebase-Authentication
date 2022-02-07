// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDt_QIkckXv6FlOd0EcZ2Hlmph_Yqwpz2o",
    authDomain: "fir-authentication-37432.firebaseapp.com",
    projectId: "fir-authentication-37432",
    storageBucket: "fir-authentication-37432.appspot.com",
    messagingSenderId: "308686498306",
    appId: "1:308686498306:web:49c4127c76462557c9151b",
    measurementId: "G-SH19PFEBSZ"
};
// firebase.initializeApp(firebaseConfig);
// // firebase.getAnalytics();
// // firebase.initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
firebase.auth();
// console.log(auth)
// const analytics = getAnalytics(app);