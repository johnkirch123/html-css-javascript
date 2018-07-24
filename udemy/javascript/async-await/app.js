// async function myFunc() {

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const err = true;
    
//   if(!err) {
//     const res = await promise; // Wait until the promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error('Something went wrong'));
//   }

  
// }

// myFunc().then(res => console.log(res)).catch(err => console.log(err));


////////// ASYNC FUNCTION /////////////
async function getUsers() {
  // await response of fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // Only proceed once promise is resolved
  const data = await response.json();
  // Only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));