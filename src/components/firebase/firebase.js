import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8FD7_RRNFapVbuVV_oyptixC_nBZaFYY",
  authDomain: "movie-auth-firebase.firebaseapp.com",
  projectId: "movie-auth-firebase",
  storageBucket: "movie-auth-firebase.appspot.com",
  messagingSenderId: "738600184358",
  appId: "1:738600184358:web:59b8bf552ab5acc59554e7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;