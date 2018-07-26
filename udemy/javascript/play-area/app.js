/**
 * utilizing callbacks
 */
// first(2, function(firstResult, err) {
//   if (!err) {
//     console.log(firstResult);
//     second(firstResult, function(secondResult, err) {
//       if (!err) {
//         console.log(secondResult);
//         third(secondResult, function(thirdResult, err) {
//           if (!err) {
//             console.log(thirdResult);
//           }
//         });
//       }
//     });
//   }
// });

// function first(value, callback) {
//   callback(value + 2, false);
// }

// function second(value, callback) {
//   callback(value + 2, false);
// }

// function third(value, callback) {
//   callback(value + 2, false);
// }

// const posts = [
//   { title: "Post One", body: "This is post one" },
//   { title: "Post Two", body: "This is post two" }
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({ title: "Post Three", body: "This is post three" }, getPosts);

/**
 * utilizing promises
 */
// var promise = new Promise(function(resolve, reject) {
//   resolve(2);
// });

// promise
//   .then(first)
//   .then(second)
//   .then(third)
//   .then(function(response) {
//     console.log(response);
//   });

// function first(value) {
//   return value + 2;
// }

// function second(value) {
//   return value + 2;
// }

// function third(value) {
//   return value + 2;
// }

const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch(err => console.log(err));

// Promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Goodbye");
//   }, 2000);
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
//   res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then(values =>
//   console.log(values)
// );

/**
 * ASYNC AWAIT
 */
// async function init() {
//   await createPost({ title: "Post Three", body: "This is post three" });

//   getPosts();
// }

// init();

// ASYNC AWAIT WITH FETCH
async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  console.log(data);
}

fetchUsers();
