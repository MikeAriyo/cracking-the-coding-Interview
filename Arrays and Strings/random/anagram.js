// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let charCount = {};
  for (let i = 0; i < s.length; i++) {
    if (!charCount[s[i]]) {
      charCount[s[i]] = 1;
    } else {
      charCount[s[i]]++;
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (!charCount[t[i]]) {
      return false;
    } else {
      charCount[t[i]]--;
    }
  }
  return true;
}
