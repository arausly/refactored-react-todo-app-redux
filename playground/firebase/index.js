var firebase = require('firebase');
import uuid from 'node-uuid';

  var config = {
    apiKey: "AIzaSyBK22Y-WBtgM60nI41dKgbYB-snnZW41S8",
    authDomain: "react-todo-app-5535a.firebaseapp.com",
    databaseURL: "https://react-todo-app-5535a.firebaseio.com",
    projectId: "react-todo-app-5535a",
    storageBucket: "react-todo-app-5535a.appspot.com",
    messagingSenderId: "965428088958"
  };

firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

firebaseRef.set({
	id:uuid(), 
	appName:"React-todo-app",
	semver:{
	  version:"1.0.0"
	},
	author:{
		name:"Arausi",
		status:"Creator"
	}
}).then(()=>{
	console.log('Set worked');
},(err)=>{
	console.log(err,'Set failed');
});

firebaseRef.child('todos').push({
	text:"create a calculator",
});

const trackChange =(snapshot)=>{
	console.log('todo changed',snapshot.key,snapshot.val());
}
const trackadd =(snapshot)=>{
	console.log('todo add',snapshot.key,snapshot.val());
}
const trackrm =(snapshot)=>{
	console.log('todo removed',snapshot.key,snapshot.val());
}

firebaseRef.child('todos').on('child_added',trackadd);
firebaseRef.child('todos').on('child_changed',trackChange);
firebaseRef.child('todos').on('child_removed',trackrm);