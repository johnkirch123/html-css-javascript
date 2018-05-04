// var obj = {
//   name: 'John'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

var personString = '{"name": "John", "age": 37}';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);
