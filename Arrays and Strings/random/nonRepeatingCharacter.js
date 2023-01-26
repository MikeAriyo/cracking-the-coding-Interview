// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

function firstNonRepeatingChar(s) {
  let charFrequency = {};
  for (let i = 0; i < s.length; i++) {
    charFrequency[s[i]] = charFrequency[s[i]] + 1 || 1;
  }
  for (let i = 0; i < s.length; i++) {
    if (charFrequency[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}

// Alternatively
// using a map instead of an object
function firstNonRepeatingChar(s) {
  let charFrequency = new Map();
  for (let i = 0; i < s.length; i++) {
    charFrequency.set(s[i], (charFrequency.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (charFrequency.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
}
