import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbsFS8YHp2Cw1qzYMA0hZF9amQ6hJvXT8",
  authDomain: "inventory-auth-cbc90.firebaseapp.com",
  projectId: "inventory-auth-cbc90",
  storageBucket: "inventory-auth-cbc90.appspot.com",
  messagingSenderId: "388705778802",
  appId: "1:388705778802:web:72595d6549a429da5fd6eb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
