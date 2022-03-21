import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Config here
const config = {
  apiKey: "AIzaSyDG-aGN84zBWeyr0UolTng-P3HI6SFNt1c",
  authDomain: "netflix-app-react-ed0ab.firebaseapp.com",
  projectId: "netflix-app-react-ed0ab",
  storageBucket: "netflix-app-react-ed0ab.appspot.com",
  messagingSenderId: "763839652269",
  appId: "1:763839652269:web:6f4932c6432faaa056c124",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
