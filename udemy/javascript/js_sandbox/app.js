let val;

// Number to String
val = String(5);
val = String(4 + 4);
// Bool to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1, 2, 3, 4]);

//toString()
val = (5).toString();
val = true.toString();

// String to Number
val = Number("5");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("hello"); // NaN - Not a Number

val = parseInt("100");
val = parseFloat("100.11");

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed(2));

const val1 = "5";
const val2 = 6;
const sum = val1 + val2;

console.log(sum); // Answer is type coercion
console.log(typeof sum);
