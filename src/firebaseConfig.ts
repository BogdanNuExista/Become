import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDpIHp6FFBIWv-yxuyPXuRa6wLynE-FzoA",
  authDomain: "become-1adb0.firebaseapp.com",
  projectId: "become-1adb0",
  storageBucket: "become-1adb0.appspot.com",
  messagingSenderId: "284872338175",
  appId: "1:284872338175:web:aac61a6a4f7b3d015e7aca",
  databaseURL: "https://become-1adb0-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

const db = getFirestore(app);

export { app, auth, db };