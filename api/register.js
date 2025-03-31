import { getAuth, createUserWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { app } from "./DBconfig.js"

const form_register = document.getElementById('form_register')

form_register.addEventListener('submit', (event) => {
    event.preventDefault()
    console.log("inside submit event")

    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password= document.getElementById('password').value
    
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            updateProfile(user, {
                displayName: username
            })
            console.log("user insert!")
            window.location.href = "index.html"
        })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
    });

    console.log("Insert!")
});