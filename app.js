//signUp
const google = document.querySelector("#googleSignUp")
const signUpSection = document.querySelector(".signUp")
const facebook = document.querySelector(".facebook img")
const form = document.querySelector(".signUp form")
const name = document.getElementById("name")
const emailOne = document.getElementById("emailForSignUP")
const passwordTwo = document.getElementById("passwordForSignUp")
const passwordThree = document.getElementById("checkPasswordForSignUp")
const signUp = document.getElementById("signUp")
const spaceForError = document.querySelector(".error")
signUpSection.style.display = "none"

//signIn
const signInSection = document.querySelector(".signIn")
const emailTwo = document.getElementById("email")
const passwordOne = document.getElementById("password")
const forgetPassword = document.getElementById("forget")
const formOne = document.querySelector(".signIn form")
const errorForSignIn = document.querySelector(".errorForSignIn")
const goSignUpSection = document.querySelector(".goSignUpSection")
const googleSignIn = document.getElementById("googleSignIn")
const facebookSignIn = document.getElementById("facebookSignIn")


// signInSection.style.display = "none";
//forget password function
function resetPasswordFunction(email) {
    console.log("okk")
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent!
            // ..
            console.log(email)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(error)
            console.log(email)
        });
}
forgetPassword.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("hello")
    emailTwo.addEventListener("change", (er) => {
        er.preventDefault()
        const emailTwoValue = emailTwo.value
        // console.log(emailTwoValue)
        resetPasswordFunction(emailTwoValue)
    })
})
//welcome section
const welcome = document.querySelector(".between")
const welcomeSection = document.querySelector(".welcome")
const userEmail = document.querySelector(".userEmail")
const signOut = document.getElementById("signOut")
// console.log(signOut)
//SignOut
welcomeSection.style.display = "none"
signOut.addEventListener("click", (e) => {
    firebase.auth().signOut().then(function () {
        // Sign-out successful.
        welcomeSection.style.display = "none"
        signInSection.style.display = "flex";
        console.log("success")
        window.location.reload()
    }).catch(function (error) {
        // An error happened.
    });
})
//get user data
const getUserDataFromFirebase = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // var uid = user.uid;
            console.log(user)
            userEmail.innerHTML = user.email

            // ...
        } else {
            // User is signed out
            // ...
        }
    });
}
getUserDataFromFirebase()


//sign in with email and password
const signInWithEmailAndPassword = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
            console.log("okkkk")
            welcomeSection.style.display = "flex"
            signInSection.style.display = "none";

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            errorForSignIn.innerHTML = error
        });
}
formOne.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailTwoValue = emailTwo.value
    const passwordOneValue = passwordOne.value
    signInWithEmailAndPassword(emailTwoValue, passwordOneValue)
})
goSignUpSection.addEventListener("click", (e) => {
    e.preventDefault();
    signInSection.style.display = "none";
    signUpSection.style.display = "flex"

})
//firenase email authentication
const signUpWithEmailAuthentication = (email, passwordTwo, passwordThree) => {

    firebase.auth().createUserWithEmailAndPassword(email, passwordTwo)
        .then((userCredential) => {
            console.log("yes")
            signUpSection.style.display = "none"
            signInSection.style.display = "none";
            welcomeSection.style.display = "flex"
            emailVerification()

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            console.log(error)
            spaceForError.innerHTML = error
        });
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const emailValue = emailOne.value
    const passwordTwoValue = passwordTwo.value
    const passwordThreeValue = passwordThree.value
    console.log(emailValue, passwordThreeValue, passwordTwoValue)
    if (passwordTwoValue === passwordThreeValue) {
        signUpWithEmailAuthentication(emailValue, passwordTwoValue, passwordThreeValue)
    } else {
        spaceForError.innerHTML = "Password does not match"
    }
})
//signIn with Google
const signInWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth()
        .getRedirectResult()
        .then((result) => {
            if (result.credential) {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
                // ...
            }
            // The signed-in user info.
            var user = result.user;
            console.log("oruf")
            welcomeSection.style.display = "flex"
            signUpSection.style.display = "none"
            signInSection.style.display = "none";
            emailVerification()

        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}
googleSignIn.addEventListener("click", (e) => {
    signInWithGoogle()
})

//signIn With FaceBook
function signInWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithRedirect(provider);
    firebase.auth()
        .getRedirectResult()
        .then((result) => {
            if (result.credential) {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                var token = credential.accessToken;
                // ...
            }
            console.log("oishofugs")
            emailVerification()
            // The signed-in user info.
            var user = result.user;
            welcomeSection.style.display = "flex"
            signUpSection.style.display = "none"
            signInSection.style.display = "none";

        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
}

facebookSignIn.addEventListener("click", () => {
    signInWithFacebook()
})
//email verification
function emailVerification() {
    firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
            // Email verification sent!
            // ...
            console.log("successful")
        }).catch((e) => {
            console.log(e)
        });
}