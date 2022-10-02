import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAXKjokuB7WOmNrBn9POKOKDPWm5Syvmgo",
    authDomain: "netflix-eeaec.firebaseapp.com",
    projectId: "netflix-eeaec",
    storageBucket: "netflix-eeaec.appspot.com",
    messagingSenderId: "433248608358",
    appId: "1:433248608358:web:79c1c6f495e5d2cdec4da7",
    measurementId: "G-PWB3FGZT84"
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  export default storage;