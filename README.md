<div style="display: flex; flex-wrap: wrap;">
<p align="center"><a href="https://fr.legacy.reactjs.org/" target="_blank"><img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" width="400" alt="ReactJs Logo"></a></p>
<p align="center"><a href="https://fr.legacy.reactjs.org/" target="_blank"><img src="https://cdn.worldvectorlogo.com/logos/redux.svg" width="400" alt="Redux Logo"></a></p>
<p align="center"><a href="https://console.firebase.google.com/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/New_Firebase_logo.svg/2560px-New_Firebase_logo.svg.png" width="400" alt="Firebase Logo"></a></p>
</div>

# PureTalk-App
Une application de chat en temps réel construite avec ReactJS, Redux et Firebase.

## Fonctionnalités
- Inscription et connexion des utilisateurs
- L'ajout des utilisateurs
- Envoi de messages en temps réel
- Historique des messages pour chaque conversation

## Technologies utilisées
- **ReactJS** 
- **Redux**
- **Firebase**
- **Firebase Authentication**
- **Firebase Firestore**
- **Firebase Storage**

## Installation
1. Clonez le dépôt GitHub :
   git clone https://github.com/sife22/puretalk-app.git

2. Accédez au répertoire du projet :
   cd chat-app

3. Installez les dépendances :
   npm install

4. Configurez les variables d'environnement Firebase :
   - Créez un projet Firebase dans la console Firebase (https://console.firebase.google.com/)
   - Copiez les informations de configuration du projet Firebase dans un fichier `.env` à la racine du projet
   - Exemple :
     REACT_APP_FIREBASE_API_KEY=AIzaSyBxXXXXXXXXXXXXXXXXXXXXXXXXXXX

5. Démarrez l'application :
   npm start