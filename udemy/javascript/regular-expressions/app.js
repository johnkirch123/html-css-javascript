/**
 * REGULAR EXPRESSIONS
 * i : case insensitive
 * g : global search = looks for all instances of regex, not just first
 *
 */

// let re;
// re = /hello/gi;

/* source returns */
// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec("hello world");
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Return true or false
// const result = re.test("Hello");
// console.log(result);

// match() - Return result array or null
// const str = "Hello There Hello hello";
// const result = str.match(re);
// console.log(result);

// search() - Return index of the first match if not found returns -1
// const str = "Hello There";
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = "Hello There";
// const result = str.replace(re, 'Hi');
// console.log(result);

let re;
// Literal Characters
re = /hello/i;

// Metacharacter Symbols
re = /^h/i; // Must start with - caret
re = /orld$/i; // Must end with - dollar sign
re = /^hello$/i; // Must start and end with
re = /^h.llo$/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a?y\?/i; // Escape character to be literal

// Brackets [] - Character Sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/; // Must be uppercase G or F
re = /[^GF]ray/i; // Matches anything except a G or F
re = /[A-Z]ray/i; // Matches any uppercase letter
re = /[a-z]ray/; // Matches any lowercase letter
re = /[A-Za-z]ray/; // Matches any letter
re = /[0-9][0-9]ray/; // Matches any digit

// Braces {} - Quantifiers
re = /Hel{2}o/i; // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i; // Must occur exactly {m, n} m to n times
re = /Hel{2,}o/i; // Must at least {m} amount of times

// Parentheses () - Grouping
re = /^([0-9]x){3}$/i; // A number and x must occur exactly 3 times

// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\D/; // Match any Non-digit
re = /\s/; // Match whitespace char
re = /\S/; // Match Non-whitespace char
re = /Hell\b/i; // Word boundary - exact match

// Assertions
re = /x(?=y)/; // Match x only if its followed by y
re = /x(?!y)/; // Match x only if its NOT followed by y

// String to Match
const str = "xy";
// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
