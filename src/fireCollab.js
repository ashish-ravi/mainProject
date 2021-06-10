import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD5POm1lJXH1XrHfjrCVGzVhKia0zhMutg",
    authDomain: "livecodeapp.firebaseapp.com",
    databaseURL: "https://livecodeapp-default-rtdb.firebaseio.com",
    projectId: "livecodeapp",
    storageBucket: "livecodeapp.appspot.com",
    messagingSenderId: "433191593977",
    appId: "1:433191593977:web:d5aa1ef0b0655b746fff28",
    measurementId: "G-549BTL193Z"
  };

  const fireCollab = firebase.initializeApp(firebaseConfig);

  export default fireCollab;