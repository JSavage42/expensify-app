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

<<<<<<< HEAD
database.ref('isSingle').remove();


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
=======
database.ref().set({
  name: 'Jason Savage',
  age: 28,
  stressLevel: 6,
  job: {
    title: 'Software Engineer',
    company: 'Cerner'
  },
  location: {
    city: 'Kansas City',
    state: 'Kansas',
    country: 'United State'
  }
}).then(() => {
  console.log('Data is saved');

}).catch((e) => {
  console.log('This failed.', e);
});
>>>>>>> 2470ca08f00c30e8007de232969af4f1d2823895

// database.ref('age').set(29);
// database.ref('location/city').set('Overland Park');

// database.ref('attributes').set({
//   height: 69,
//   weight: 241
// });

<<<<<<< HEAD
=======
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data');
//   });

// database.ref().update({
//   stressLevel: 1,
//   "job/company": 'Cerner',
//   "location/city": 'Overland Park'
// })
//   .then(() => {
//     console.log('Data is updated');
//   })
//   .catch((e) => {
//     console.log('Data was not updated');
//   })

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });
setTimeout(() => {
  database.ref()
    .on('value', (snapshot) => {
      const val = snapshot.val();
      console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
    });
}, 3500);

setTimeout(() => {
  database.ref('name').set('Jess Savage');
}, 7000);

>>>>>>> 2470ca08f00c30e8007de232969af4f1d2823895
