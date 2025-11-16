// =========================================    1-masala   ========================================================
// =================================================================================================================

// function getUserInfo(user) {
//   return "Foydalanuvchi ismi: " + user.name + ", yoshi: " + user.age;
// }

// const user = {
//   name: "Ali",
//   age: 25,
// };

// console.log(getUserInfo(user));

// =========================================    2-masala   ========================================================
// =================================================================================================================

// const product = {
//   name: "Telefon",
//   price: 1000,
// }

// function addTax(product) {
//   product.priceWithTax = product.price * 1.12;
//   return product;
// }

// console.log(addTax(product));

// =========================================    4-masala   ========================================================
// =================================================================================================================

// const carInfo = (car) => {
//   return "Bu " + car.color + " ragnli " + car.model + ", " + car.year + "-yill";
// }

// const car = {
//   model: "Cobalt",
//    year: 2022,
//   color: "oq"
// }

// console.log(carInfo(car));

// =========================================    5-masala   ========================================================
// =================================================================================================================

// function hasEmail(user) {
//   return user.email || false;
// }

// const user1 = {
//   name: "Ali",
//   email: "ali@gmail.com"
// }

// const user2 = {
//   name: "Ali",
// }

// console.log(hasEmail(user1));
// console.log(hasEmail(user2));

// =========================================    6-masala   ========================================================
// =================================================================================================================

// function calculateSpeed(car) {
//   car.speed = car.distance / car.time;
//   return car;
// }

// const car = {
//   model: "Cobalt",
//   time: 3,
//   distance: 150
// }

// console.log(calculateSpeed(car));

// =========================================    7-masala   ========================================================
// =================================================================================================================

// function calculateWorkTime(worker) {
//   worker.hoursWorked = worker.end - worker.start;
//   return worker;
// }

// const worker = {
//   name: "Ali",
//   start: 9,
//   end: 18
// }

// console.log(calculateWorkTime(worker));

// =========================================    8-masala   ========================================================
// =================================================================================================================

// function calculateVolume(cube) {
//   cube.volume = cube.side ** 3;
//   return cube;
// }
// const cube = {
//   side: 4,
// };

// console.log(calculateVolume(cube));

// =========================================    9-masala   ========================================================
// =================================================================================================================

// function isPasswordStrong(user) {
//   user.isStrong = user.password.length >= 8;
//   return user;
// }

// const user1 = {
//   username: "test",
//   password: "12345678"
// };

// const user2 = {
//   username: "test",
//   password: "1234"
// };

// console.log(isPasswordStrong(user1));
// console.log(isPasswordStrong(user2));

// =========================================    10  -masala   ========================================================
// =================================================================================================================

// function calculateBirthYear(person) {
//   person.birthYear = 2025 - person.age;
//   return person;
// }

// const person = {
//   name: 'Laylo',
//   age: 20,
// };

// console.log(calculateBirthYear(person));

// =========================================    11  -masala   ========================================================
// =================================================================================================================

// function updateUser(user) {
//   Object.isFrozen(user) && console.log("Object is frozen");
// }

// const user = Object.freeze({ name: "Ulug'bek", age: 20 });
// updateUser(user);

// =========================================    12  -masala   ========================================================
// =================================================================================================================


// function checkFrozenStatus(obj) {
//   if (Object.isFrozen(obj)) {
//     return "Frozen";
//   } else {
//     return "Not frozen";
//   }
// }

// const car = Object.freeze({ model: "Malibu" });
// console.log(checkFrozenStatus(car));
 
// =========================================    14  -masala   ========================================================
// =================================================================================================================

// function checkProperty(obj, key) {
//     return key in obj;
// }

// const book = { title: "JS Fundamentals", author: "Mirzo" };

// console.log(checkProperty(book, "author"));
// console.log(checkProperty(book, "price"));

