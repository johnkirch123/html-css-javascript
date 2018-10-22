// Frequency counter
const anagramDebugger = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  let an1 = {};
  let an2 = {};
  str1.split("").map(letter => {
    an1[letter] = (an1[letter] || 0) + 1;
  });
  str2.split("").map(letter => {
    an2[letter] = (an2[letter] || 0) + 1;
  });
  console.log(an1);
  console.log(an2);
  for (let key in an1) {
    if (!(key in an2)) return false;
    if (an1[key] !== an2[key]) return false;
  }
  return true;
};

// console.log(anagramDebugger("bbababa", "aabbabb"));
// console.log(anagramDebugger("dgfhdgfns", "sfb"));
// console.log(anagramDebugger("cmost", "stmoc"));
// console.log(anagramDebugger("babylong", "gnolybab"));
// console.log(anagramDebugger("sdcsdgds", "seterhrd"));
