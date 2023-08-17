import { initializeApp } from 'firebase/app';

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAZ1tf7jW3H6vozSF-NCDP_2HZEY36Efvo",
  authDomain: "awesomeproject-66848.firebaseapp.com",
  projectId: "awesomeproject-66848",
  storageBucket: "awesomeproject-66848.appspot.com",
  messagingSenderId: "93862074438",
  appId: "1:93862074438:web:48508d72bd1e9b84401247",
  measurementId: "G-8E8VPBXRRY"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);