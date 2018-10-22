// Multiple Pointer
const multiplePointer = arr => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};

// console.log(multiplePointer([-5, -3, -2, 0, 1, 2, 4, 6]));
// console.log(multiplePointer([-4, -3, -2, -1, 0, 2, 4, 5]));
// console.log(multiplePointer([-7, -3, -2, 0, 1, 2, 4, 5, 6]));
// console.log(multiplePointer([-7, -3, -2, 0, 1, 4, 5, 6]));

// count unique values
// const countUniqueValues = arr => {
//   if (arr.length === 0) return 0;
//   let counter = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) counter++;
//   }
//   return counter;
// };
const countUniqueValues = arr => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i === 0 ? 0 : i + 1;
};

console.log(countUniqueValues([-5, -3, -2, 0, 1, 2, 4, 6]));
console.log(countUniqueValues([-4, -3, -2, -1, 0, 2, 4, 5]));
console.log(countUniqueValues([-7, -3, -2, 0, 1, 2, 4, 5, 6]));
console.log(countUniqueValues([-7, -3, -2, 0, 1, 4, 5, 6]));
console.log(countUniqueValues([1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3]));
console.log(countUniqueValues([]));
