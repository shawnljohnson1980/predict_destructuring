// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     createdAt: 1543945177623
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// const { email } = person;
// const [firstAnimal] = animals;
// console.log(email);
// // => bob@marley.com
// console.log(firstAnimal);
// // => horse
// OLD:var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];

// NEW:
// const { email, password } = person;
// const [firstAnimal, secondAnimal, thirdAnimal] = animals;
// const password = '12345';
// const { password } = person;
// const hashedPassword = person.password;
// const { hashedPassword } = person;
// const password = '12345';
// const { password: hashedPassword } = person;

// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//         {
//             address: '1600 Pennsylvania Avenue',
//             city: 'Washington, D.C.',
//             zipcode: '20500',
//         },
//         {
//             address: '221B Baker St.',
//             city: 'London',
//             zipcode: 'WC2N 5DU',
//         }
//     ],
//     createdAt: 1543945177623
// };
// console.log(person)