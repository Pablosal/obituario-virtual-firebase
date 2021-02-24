// Your web app's Firebase configuration

import firebase from "firebase/app";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyCvSPUfggeeGCMkfCrBnYF0XqLexmDYbuA",
  authDomain: "obituario-a31d7.firebaseapp.com",
  projectId: "obituario-a31d7",
  storageBucket: "obituario-a31d7.appspot.com",
  messagingSenderId: "706456556663",
  appId: "1:706456556663:web:d1734bd3ecb23f66bda272",
};
// Initialize Firebase
class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(firebaseConfig);
    }
    this.db = firebase.firestore();
  }
  agregarObtuarioADB = async (obituario) => {
    await this.db
      .collection("obituarios")
      .add({...obituario,comentarios:[]});
  };
  agregarComentariosADB = async (id, comentario) => {
    await this.db
      .collection("obituarios")
      .doc(id)
      .update({
        comentarios: firebase.firestore.FieldValue.arrayUnion(comentario),
      });
};

}
export const firebaseInstance = new Firebase();
