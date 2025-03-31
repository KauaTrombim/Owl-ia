import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";
import { app } from "./DBconfig.js";

const form_login = document.getElementById('form_login')

form_login.addEventListener("submit", (event)=>{
    event.preventDefault()

    const auth = getAuth(app);
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode+": "+errorMessage)
    });
})