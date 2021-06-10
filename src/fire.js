import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBN-xXHUtMnSfUSj2EHHUJCfANja-5XiVY",
    authDomain: "chatting-app-3ce87.firebaseapp.com",
    projectId: "chatting-app-3ce87",
    storageBucket: "chatting-app-3ce87.appspot.com",
    messagingSenderId: "739971329765",
    appId: "1:739971329765:web:c04a1d3267238a4b706e0c",
    measurementId: "G-FT9ZSFHYVZ"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;