# Primul site Firebase

Acesta este un proiect simplu pentru Firebase Hosting.

## Autentificare cu email si parola

Pagina foloseste Firebase Authentication. Inainte de deploy trebuie sa faci acesti pasi in Firebase Console:

1. Intra la Authentication.
2. Apasa Get started daca este prima data.
3. La Sign-in method activeaza Email/Password.
4. La Users adauga un utilizator cu email si parola.
5. In Project settings > General creeaza sau deschide aplicatia Web.
6. Copiaza valorile `apiKey` si `appId` in `app.js`.

## Deploy automat

Workflow-ul din `.github/workflows/firebase-hosting-merge.yml` publica site-ul automat in Firebase cand faci push pe branch-ul `main`.

Pentru ca deploy-ul automat sa functioneze, repository-ul GitHub trebuie sa aiba secretul:

```text
FIREBASE_SERVICE_ACCOUNT_JHJHJHJH_558D8
```

Cel mai usor il creezi ruland din acest folder:

```text
firebase init hosting:github
```

Cand esti intrebat de repository, foloseste forma:

```text
ionionescu86-commits/excel
```
