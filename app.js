import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAP-QwUOYpyCidmLWBtKtC2ZgNKg_oFRmA",
  authDomain: "jhjhjhjh-558d8.firebaseapp.com",
  projectId: "jhjhjhjh-558d8",
  storageBucket: "jhjhjhjh-558d8.firebasestorage.app",
  messagingSenderId: "433087875249",
  appId: "1:433087875249:web:68279735be4ee1bcbd3a90"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const authBox = document.getElementById("authBox");
const appBox = document.getElementById("appBox");
const loginForm = document.getElementById("loginForm");
const logoutButton = document.getElementById("logoutButton");
const authMessage = document.getElementById("authMessage");
const userEmail = document.getElementById("userEmail");

onAuthStateChanged(auth, (user) => {
  const isLoggedIn = Boolean(user);

  authBox.classList.toggle("hidden", isLoggedIn);
  appBox.classList.toggle("hidden", !isLoggedIn);
  userEmail.textContent = user?.email ?? "";
  authMessage.textContent = "";
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  authMessage.textContent = "";

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    loginForm.reset();
  } catch (error) {
    authMessage.textContent = "Emailul sau parola nu sunt corecte.";
  }
});

logoutButton.addEventListener("click", async () => {
  await signOut(auth);
});
