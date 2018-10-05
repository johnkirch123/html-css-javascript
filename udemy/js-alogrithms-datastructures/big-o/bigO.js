// function addUpTo(n) {
//   let total = 0;
//   for (let i = 0; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

/**
 * performance not on node, from browser
 */
var t1 = performance.now();
let value = addUpTo(1000000000);
var t2 = performance.now();
console.log(
  `Time Elapsed: ${(t2 - t1) / 1000} seconds. With a value of ${value}`
);
