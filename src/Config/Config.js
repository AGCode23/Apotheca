import firebase from 'firebase/compat/app'; // Import the compat version of firebase

import 'firebase/compat/storage'; // Import the compat version of storage
import 'firebase/compat/firestore'; // Import the compat version of firestore
import 'firebase/compat/auth'; // Import the compat version of auth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPu6-tEgwqVvONnZ7KKZbMc8CWwXeliK0",
  authDomain: "apotheca-110d2.firebaseapp.com",
  projectId: "apotheca-110d2",
  storageBucket: "apotheca-110d2.appspot.com",
  messagingSenderId: "614804086484",
  appId: "1:614804086484:web:bf6d7dd89aaec2b6062541"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Now you can use Firebase services like Firestore, Authentication, and Storage
const auth = firebase.auth(); // Get the authentication instance
const db = firebase.firestore(); // Get the Firestore instance
const storage = firebase.storage(); // Get the storage instance

// Export the Firebase services for use in other parts of the application
export { auth, db, storage };
