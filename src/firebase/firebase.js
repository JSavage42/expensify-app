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

const database = firebase.database();

// database.ref().set({
//   name: 'Jason Savage',
//   age: 28,
//   isSingle: false,
//   location: {
//     city: 'Kansas City',
//     state: 'Kansas',
//     country: 'United State'
//   }
// }).then(() => {
//   console.log('Data is saved');

// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref('age').set(29);
// database.ref('location/city').set('Overland Park');

// database.ref('attributes').set({
//   height: 69,
//   weight: 241
// });

