// /* Lesson 1 */

// // Person constructor
// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }

// // const john = new Person('John', 37);
// // const brad = new Person('Brad', 36);

// const john = new Person('John', '08-02-1980');

// console.log(john.calculateAge());


// /* Lesson 2 */
// // String
// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// // name2.foo = 'bar';

// // console.log(name1);
// // console.log(name2);
// console.log(typeof name2);

// if(name2 == 'Jeff') {
//   console.log('Yes');
// } else {
//   console.log('No');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2);
// // same for other object types, bool, float, etc...
// // Function
// const getSum1 = function(x, y) {
//   return x + y;
// }

// const getSum2 = new Function('x', 'y', 'return 1 + 1');

// console.log(getSum1(1, 1));

// /* Lesson 3 */
// // Object.prototype
// //Person.prototype - from person object we created
// // Person constructor
// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function() {
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }

// // Calculate age
// Person.prototype.calculateAge = function() {
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get full name
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// // Gets Married
// Person.prototype.getsMarried = function(newLastName) {
//   this.lastName = newLastName;
// }

// const john = new Person('John', 'Kirch', '8-2-1980');
// const mary = new Person('Mary', 'Poppins', 'March 3 1991');

// console.log(mary);

// console.log(john.calculateAge());

// console.log(mary.getFullName());

// mary.getsMarried('Smith');

// console.log(mary.getFullName());
// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

// /* Lesson 4 */
// // Person constructor
// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// // console.log(person1.greeting());
// // Customer constructor
// function Customer(firstName, lastName, phoneNumber, membership) {
//   Person.call(this, firstName, lastName);

//   this.phoneNumber = phoneNumber;
//   this.membership = membership;
// }

// // Inherit the person prototype methods
// Customer.prototype = Object.create(Person.prototype);
// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Create customer
// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

// console.log(customer1);
// // Customer greeting
// Customer.prototype.greeting = function() {
//   return `Hello there ${this.firstName} ${this.lastName}, Welcome to our company!`;
// }

// console.log(customer1.greeting());


// /* Lesson 5 Object oriented in ES5 */
// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson');
// console.log(mary.greeting());

// const john = Object.create(personPrototypes, {
//   firstName: {value: 'John'},
//   lastName: {value: 'Kirch'},
//   age: {value: 37}
// });

// console.log(john);

// console.log(john.greeting());

// /* Lesson 6 ES6 classes */
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Poppins', '11-13-1980');
// mary.getsMarried('Thompson');
// console.log(mary);
// console.log(Person.addNumbers(1, 2));

/* Lesson 7 subclasses */
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer('John', 'Kirch', '555-555-5555', 'Standard');

console.log(john.greeting());
console.log(Customer.getMembershipCost());