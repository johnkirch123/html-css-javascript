console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log('Result: ', notes.add(9, -2));
// var result = notes.add(5, 9);
// console.log(result);
// var res = notes.addNote();
// console.log(res);
// var user = os.userInfo();
//
// fs.appendFile('grettings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
