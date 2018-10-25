/**
 * @input str - rand string of letters
 * @return  string of comma-separated sequences sorted
 *          alphabetically, with each sequence starting
 *          with an uppercase character followed by n-1
 *          lowercase characters, where n is the letter's
 *          alphabetic position.
 * @edge    multiple of same letter?
 */
const alphaSeq = str =>
  str
    .toLowerCase()
    .split("")
    .sort()
    .map(letter => {
      let newStr = "";
      for (let i = 0; i < letter.charCodeAt(0) - 96; i++) {
        i !== 0 ? (newStr += letter) : (newStr += letter.toUpperCase());
      }
      return newStr;
    })
    .join(",");

// alphaSeq("ZjmfQrTVj");
console.log(alphaSeq("ZjmfQrTVj"));
