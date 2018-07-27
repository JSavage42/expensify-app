import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAQIu3dPIia_GJ2GR1DFoCpCCt4hEWfyc8",
  authDomain: "expensify-4e04d.firebaseapp.com",
  databaseURL: "https://expensify-4e04d.firebaseio.com",
  projectId: "expensify-4e04d",
  storageBucket: "expensify-4e04d.appspot.com",
  messagingSenderId: "156346352786"
};

firebase.initializeApp(config);