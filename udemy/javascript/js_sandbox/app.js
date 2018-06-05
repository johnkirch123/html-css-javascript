// let val;

// // Number to String
// val = String(5);
// val = String(4 + 4);
// // Bool to String
// val = String(true);
// // Date to String
// val = String(new Date());
// // Array to String
// val = String([1, 2, 3, 4]);

// //toString()
// val = (5).toString();
// val = true.toString();

// // String to Number
// val = Number("5");
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number("hello"); // NaN - Not a Number

// val = parseInt("100");
// val = parseFloat("100.11");

// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

// const val1 = "5";
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum); // Answer is type coercion
// console.log(typeof sum);

/* MATH FUNCTIONS AND SIMPLE MATH */

// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.5);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(2, 2);
// val = Math.min(2, 33, 4, 1, 55, 6, 3);
// val = Math.max(2, 33, 4, 1, 55, 6, 3);
// val = Math.random();
// val = Math.floor(Math.random() * 20) + 1;

// console.log(val);

/* BASIC STRING MANIPULATION */

// const firstName = "William";
// const lastName = "Johnson";
// const age = 37;
// const str = "Hello there my name is John";
// const tags = "web design,web development,programming";

// let val;

// val = firstName + " " + lastName;

// // Appending
// val = "John ";
// val += "Kirch";

// val = "Hello, my name is " + firstName + " and I am " + age;

// // Escaping
// val = "That's awesome, I can't wait"; // using \ before the '

// // Length
// val = firstName.length;

// // Concat
// val = firstName.concat(" ", lastName);

// // Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// // indexOf
// val = firstName.indexOf("l");
// val = firstName.lastIndexOf("l");

// // charAt()
// val = firstName.charAt(3);
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// // slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split()
// val = str.split(" ");
// val = tags.split(",");

// // replace()
// val = str.replace("John", "Joacc");

// // includes()
// val = str.includes("Hello");

// console.log(val);

/* TEMPLATE LITERALS */

// const name = "John";
// const age = 31;
// const job = "Web Developer";
// const city = "Fort Collins";
// let html;

// // Without template strings (es5)
// html =
//   "<ul><li>Name: " +
//   name +
//   "</li><li>Age: " +
//   age +
//   "</li><li>Job: " +
//   job +
//   "</li><li>City: " +
//   city +
//   "</li></ul>";

// function hello() {
//   return "hello";
// }

// // With template strings (es6)
// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? "Over 30" : "Under 30"}</li>
//   </ul>
// `;

// document.body.innerHTML = html;

/* ARRAYS */
// Create some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(43, 56, 33, 23, 87, 99, 21);
// const fruit = ["Apple", "Banana", "Orange", "Pear"];
// const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 1 }, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value from array
// val = numbers[3];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);

// // Mutating arrays
// numbers.push(250);
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1, 1);
// // Reverse
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(numbers2);
// // Sort
// val = fruit.sort();
// val = numbers.sort();

// // Use the 'compare function'
// val = numbers.sort(function(x, y) {
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y) {
//   return y - x;
// });

// // Find
// function under50(num) {
//   return num < 50;
// }

// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);

/* OBJECT LITERALS */
// const person = {
//   firstName: "Steve",
//   lastName: "Smith",
//   age: 30,
//   email: "steve@aol.com",
//   hobbies: ["music", "sports"],
//   address: {
//     city: "Miami",
//     state: "FL"
//   },
//   getBirthYear: function() {
//     return 2017 - this.age;
//   }
// };

// let val;

// val = person;

// // Get Specific value
// val = person.firstName; // Recommended
// val = person["firstName"];

// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address["city"];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//   { name: "John", age: 30 },
//   { name: "Mike", age: 23 },
//   { name: "Nancy", age: 42 }
// ];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

/* DATES AND TIMES */
// let val;

// const today = new Date();
// let birthday = new Date("8-2-1980 11:10:00");
// birthday = new Date("August 2 1980");
// birthday = new Date("8/2/1980");

// val = birthday.getMonth() + 1;
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// // so on and so on

// console.log(val);
// console.log(birthday);

/* IF STATEMENTS */
const id = 100;

// EQUAL TO
if (id == 100) {
  console.log("CORRECT");
}
