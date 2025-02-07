import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSIxeHGCb4egE2v-yqAD6bzC_3lrCopTQ",
  authDomain: "mi-almacen-5ebcf.firebaseapp.com",
  projectId: "mi-almacen-5ebcf",
  storageBucket: "mi-almacen-5ebcf.firebasestorage.app",
  messagingSenderId: "1007441172226",
  appId: "1:1007441172226:web:acf4f5dd46c54a4fcad41b",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
