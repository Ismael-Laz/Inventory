import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDwbJHJuUFMBiPhGVdF_wwWK-zNm2NjYIA",
    authDomain: "inventory-manage-d833d.firebaseapp.com",
    projectId: "inventory-manage-d833d",
    storageBucket: "inventory-manage-d833d.appspot.com",
    messagingSenderId: "334826657485",
    appId: "1:334826657485:web:c41beeba84573c54fb3b84"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };