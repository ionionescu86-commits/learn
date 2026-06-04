import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_dWH0CRKjEWr1bnJ4_xE17Mkqx-99Hs8",
  authDomain: "sa-invatam.firebaseapp.com",
  projectId: "sa-invatam",
  storageBucket: "sa-invatam.firebasestorage.app",
  messagingSenderId: "77180464332",
  appId: "1:77180464332:web:6b916d2ae2d2072b67e669"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const loginPanel = document.getElementById("loginPanel");
const appPanel = document.getElementById("appPanel");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");
const userEmail = document.getElementById("userEmail");
const logoutButton = document.getElementById("logoutButton");
const message = document.getElementById("message");
const redButton = document.getElementById("redButton");
const greenButton = document.getElementById("greenButton");

onAuthStateChanged(auth, (user) => {
  const isLoggedIn = Boolean(user);

  loginPanel.classList.toggle("hidden", isLoggedIn);
  appPanel.classList.toggle("hidden", !isLoggedIn);
  userEmail.textContent = user?.email ?? "";
  loginMessage.textContent = "";
});

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginMessage.textContent = "";

  try {
    await signInWithEmailAndPassword(auth, loginForm.email.value, loginForm.password.value);
    loginForm.reset();
  } catch (error) {
    loginMessage.textContent = "Emailul sau parola nu sunt corecte.";
  }
});

logoutButton.addEventListener("click", async () => {
  await signOut(auth);
});

redButton.addEventListener("click", () => {
  message.textContent = "visezi";
});

greenButton.addEventListener("click", () => {
  message.textContent = "te-ai trezit";
});
