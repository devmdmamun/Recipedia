import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXg_wufw0Rw-wYiRJFNnhhI9Q-nrWCMGk",
  authDomain: "recipedia-b2e38.firebaseapp.com",
  projectId: "recipedia-b2e38",
  storageBucket: "recipedia-b2e38.appspot.com",
  messagingSenderId: "221853312070",
  appId: "1:221853312070:web:985fe494c621636ae11647",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const prejectFirestore = firebase.firestore();

export { prejectFirestore };
