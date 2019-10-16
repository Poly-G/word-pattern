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
  str = str.split(" ");
  pattern = pattern.split("");

  if (str.length !== pattern.length) {
    return false;
  }

  let strMap = new Map();
  let patMap = new Map();

  for (let i = 0; i < str.length; i++) {
    strMap.set(str[i], pattern[i]);
    patMap.set(pattern[i], str[i]);
  }

  strValues = strMap.values();

  if (
    strMap.size !== patMap.size ||
    strValues.next().value === strValues.next().value
  ) {
    return false;
  } else {
    return true;
  }
}

module.exports = wordPattern;
