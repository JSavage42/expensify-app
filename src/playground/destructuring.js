// const person = {
//   name: 'Jason',
//   age: 28,
//   location: {
//     city: 'Kansas City',
//     temp: 'TOO HOT'
//   }
// };

// const {name: firstName = 'Anon' , age} = person;
// const {city, temp: temperature} = person.location;

// console.log(`${firstName} is ${age}. He lives in ${city}. It is ${temperature} in ${city}.`);


// const book = {
//   title: 'Hitchhikers Guide to the Galaxy',
//   author: 'Douglas Adams',
//   publisher: {
//     name: 'BookBooks',
//     year: 1976
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);


// Array destructuring

const address = ['9016 W 127th Terr', 'Overland Park', 'Kansas', '66213'];

const [, city, state = 'Missouri'] = address;

console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (iced)', '$500', '$550', '$575'];

const [itemName, , medium, large] = item;

console.log(`A medium ${itemName} costs ${large}`);