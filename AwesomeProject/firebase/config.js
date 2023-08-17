// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: '',
  authDomain: 'awesomeproject-56e68.firebasedatabase.app',
  databaseURL: 'https://awesomeproject-56e68-default-rtdb.europe-west1.firebasedatabase.app/',
  projectId: 'awesomeproject-56e68',
  storageBucket: '',
  messagingSenderId: '530257625494',
  appId: '',
  measurementId: '',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);