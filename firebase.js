// Import SDK Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getDatabase, ref, set, push, onChildAdded, get, child } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

// Config kamu
const firebaseConfig = {
  apiKey: "AIzaSyCTjBsKdHmmTELY3wnfGYANEzzDBEF2BIo",
  authDomain: "realtime-df5d0.firebaseapp.com",
  databaseURL: "https://realtime-df5d0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realtime-df5d0",
  storageBucket: "realtime-df5d0.appspot.com",
  messagingSenderId: "1065067984786",
  appId: "1:1065067984786:web:b315a080932587ec53f34b",
  measurementId: "G-Z923CJMN44"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, push, onChildAdded, get, child };
