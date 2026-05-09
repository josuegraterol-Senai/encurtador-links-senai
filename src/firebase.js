import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeowjjxvbzLU2FgDQ6mtv1FxXuxTMkwu0",
    authDomain: "encurtador-links-senai-94888.firebaseapp.com",
      projectId: "encurtador-links-senai-94888",
        storageBucket: "encurtador-links-senai-94888.firebasestorage.app",
          messagingSenderId: "588576266962",
            appId: "1:588576266962:web:eeb1129fb2ae79fdd82b0b",
              measurementId: "G-Z2NPC1YKS6"
              };

              const app = initializeApp(firebaseConfig);
              export const db = getFirestore(app);
              export const auth = getAuth(app);
