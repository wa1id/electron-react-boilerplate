import { getFirestore } from '@firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAf8NYi8QoxS6ElmEJTZaEXsPe7bnje1sA',
  authDomain: 'test-electron-9886b.firebaseapp.com',
  projectId: 'test-electron-9886b',
  storageBucket: 'test-electron-9886b.appspot.com',
  messagingSenderId: '733084442207',
  appId: '1:733084442207:web:3e0350cc48d78ce042c5ea',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default app;
