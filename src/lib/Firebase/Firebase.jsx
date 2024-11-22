// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBCxQr9WOdHOGKHDVozCOiaO6cqqUI_sCk",
//   authDomain: "oppwon-33ec9.firebaseapp.com",
//   projectId: "oppwon-33ec9",
//   storageBucket: "oppwon-33ec9.firebasestorage.app",
//   messagingSenderId: "188236860564",
//   appId: "1:188236860564:web:c271bb21169d198e64b881",
//   measurementId: "G-N8S0X6SFJ3"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



import { initializeApp , getApp ,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";





// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu7AG1lOSEIkwIGuxAlUHo5SfpDVpOmoY",
  authDomain: "fir-auth-demo-b09aa.firebaseapp.com",
  projectId: "fir-auth-demo-b09aa",
  storageBucket: "fir-auth-demo-b09aa.firebasestorage.app",
  messagingSenderId: "770577292014",
  appId: "1:770577292014:web:750a1b94ca51cc089a31ff"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()


const auth = getAuth(app)


export {auth}
