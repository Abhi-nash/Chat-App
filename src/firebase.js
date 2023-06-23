import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpMLCE",
  authDomain: "chat-e118.com",
  projectId: "chat-e18e",
  storageBucket: "chat-epspot.com",
  messagingSenderId: "7705994",
  appId: "1:71170a233"
};  //dummy details for privacy issuse

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
