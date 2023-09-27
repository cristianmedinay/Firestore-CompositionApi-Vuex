import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
//https://stackoverflow.com/questions/71289146/firebase-question-uncaught-typeerror-firebaseapp-firestore-is-not-a-function

const firebaseConfig = {
    apiKey: "AIzaSyAcQb4R-reiTMlcYSxZNvl_83cyHh-Mqy0",
    authDomain: "vue3-firestore-e207e.firebaseapp.com",
    projectId: "vue3-firestore-e207e",
    storageBucket: "vue3-firestore-e207e.appspot.com",
    messagingSenderId: "858156006900",
    appId: "1:858156006900:web:c98d5ea3546da5a8c1cda1",
    measurementId: "G-QH8EZCYBEH"
  };


  export default function (){
        const connection = () =>{
            //inicializamos y comprobamos
            console.log(firebase.initializeApp(firebaseConfig))
            if(!firebase.apps.length){
                firebase.initializeApp(firebaseConfig);
            }
            return firebase.firestore();
          
        }
        
        return {connection}
  }