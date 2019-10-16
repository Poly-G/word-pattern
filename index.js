// --- Directions
// Given a pattern and a string str, find if str follows the same pattern.
//Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.
//You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

// --- Examples
//   pattern = "abba", str = "dog cat cat dog" --> true
//   pattern = "abba", str = "dog cat cat fish" --> false
//   pattern = "aaaa", str = "dog cat cat dog" --> false
//   pattern = "abba", str = "dog dog dog dog" --> false

function wordPattern(pattern, str) {
  let splitStr = str.split(" ");
  let splitPat = pattern.split("");

  // checking string length
  if (splitStr.length !== splitPat.length) {
    return false;
  }

  let strMap = new Map();
  let patMap = new Map();

  for (let i = 0; i < splitStr.length; i++) {
    strMap.set(splitStr[i], splitPat[i]);
    patMap.set(splitPat[i], splitStr[i]);
  }

  let strValues = strMap.values();

  if (
    // checking object length
    strMap.size !== patMap.size ||
    strValues.next().value === strValues.next().value
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = wordPattern;
