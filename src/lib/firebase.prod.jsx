import Firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCJmcLn9y9vI2JRHw0XXTT84FdA41XXTgo",
  authDomain: "netflix-clone-c9824.firebaseapp.com",
  projectId: "netflix-clone-c9824",
  databaseUrl:
    "https://netflix-clone-c9824-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "netflix-clone-c9824.appspot.com",
  messagingSenderId: "245659527821",
  appId: "1:245659527821:web:ce3a260fd06b15c17010c4",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
