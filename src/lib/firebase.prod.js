import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// Config here
const config = {
  apiKey: "AIzaSyABjBsTAhMpxlxQU6sf88mbvugkzYF0DEE",
  authDomain: "neflix-8e3d0.firebaseapp.com",
  projectId: "neflix-8e3d0",
  storageBucket: "neflix-8e3d0.appspot.com",
  messagingSenderId: "996005280208",
  appId: "1:996005280208:web:02cba2c4d8459d73f4e1d5",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
