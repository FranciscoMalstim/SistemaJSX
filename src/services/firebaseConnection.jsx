import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCQh8R_W9kr1SAQlwxryvJ-XBbJ14aW53w",
  authDomain: "sistemajsx-9dd7e.firebaseapp.com",
  projectId: "sistemajsx-9dd7e",
  storageBucket: "sistemajsx-9dd7e.appspot.com",
  messagingSenderId: "825187891912",
  appId: "1:825187891912:web:8385e2fe4943e681f343fd",
  measurementId: "G-4TZW511QTY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default firebaseConfig;