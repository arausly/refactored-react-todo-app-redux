var firebase = require('firebase');
import uuid from 'node-uuid';

try{
	  var config = {
		apiKey: "AIzaSyBK22Y-WBtgM60nI41dKgbYB-snnZW41S8",
		authDomain: "react-todo-app-5535a.firebaseapp.com",
		databaseURL: "https://react-todo-app-5535a.firebaseio.com",
		projectId: "react-todo-app-5535a",
		storageBucket: "react-todo-app-5535a.appspot.com",
		messagingSenderId: "965428088958"
	  };
 
   firebase.initializeApp(config);
	
}catch(e){
	throw new Error(e.message);
}

let firebaseRef = firebase.database().ref(); 

export {
	firebaseRef,
}

//this is done so any file that imports this file(firebase/index.js)
//will get the firebase root directory in addition 
	
export default firebase;