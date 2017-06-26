import * as firebase from 'firebase'; 

const config = {    
    apiKey: "AIzaSyBYvWmaYJ0PEAfLf7hlm3z1HLHHa5HIBeI",
    authDomain: "goalcoach-e0cfa.firebaseapp.com",
    databaseURL: "https://goalcoach-e0cfa.firebaseio.com",
    projectId: "goalcoach-e0cfa",
    storageBucket: "goalcoach-e0cfa.appspot.com",
    messagingSenderId: "1062217199622"
};


export const firebaseApp = firebase.initializeApp(config); 
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');