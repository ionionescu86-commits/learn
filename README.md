# Aplicatie cu doua butoane

Aplicatie web statica publicata cu Firebase Hosting.

## Functionare

- Butonul rosu afiseaza textul `visezi`.
- Butonul verde afiseaza textul `te-ai trezit`.
- Aplicatia este accesibila dupa autentificare cu email si parola prin Firebase Authentication.

## Firebase Authentication

In Firebase Console, activeaza metoda `Email/Password` din Authentication si creeaza cel putin un utilizator.

In `app.js`, inlocuieste valorile `INLOCUIESTE_CU_...` cu datele din configuratia aplicatiei Web Firebase pentru proiectul `sa-invatam`.

## Publicare

Workflow-ul din `.github/workflows/firebase-hosting-merge.yml` publica automat aplicatia in Firebase cand apare un push pe branch-ul `main`.
