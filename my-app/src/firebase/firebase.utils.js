import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDz47CFc7JAp3YRg68HcAchsY_0D4emVhc",
    authDomain: "licenta-db20.firebaseapp.com",
    databaseURL: "https://licenta-db20.firebaseio.com",
    projectId: "licenta-db20",
    storageBucket: "licenta-db20.appspot.com",
    messagingSenderId: "898701839664",
    appId: "1:898701839664:web:f7cb9060625c70a6f24cf5"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore =firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({promt: 'selec_account'});
  export const singInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;