import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBAWynjicLKAQIbOqXS7QlY0BthpsQj0g",
  authDomain: "my-project-ba34e.firebaseapp.com",
  projectId: "my-project-ba34e",
  storageBucket: "my-project-ba34e.appspot.com",
  messagingSenderId: "664693122358",
  appId: "1:664693122358:web:5939fcf51661fef8597f97",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();

// no analitycs

// go authentication
// enable google
// valid email
// web sdk configuration
// change .env
