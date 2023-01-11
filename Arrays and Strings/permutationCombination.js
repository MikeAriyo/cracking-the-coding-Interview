// Given a string, write a function to check if its a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards.
// A permutation is a re-arrangement of letters.
// The palindrome does not need to be limited to dictionary words.

function isPalondromePermutation(str) {
  // create an object to store the frequency of each character
  var charFrequency = {};

  //iterate through the string and increment the frequency of each character.
  for (var i = 0; i < str.length; i++) {
    var char = str[i]; // checks where we are exactly in the iteration
    charFrequency[char] = charFrequency[char] ? charFrequency[char] + 1 : 1;
  }

  // check if the string is a combination of a palindrome
  var oddCount = 0;
  for (var char in charFrequency) {
    if (charFrequency[char] % 2 !== 0) {
      oddCount++;
    }
  }
  if (oddCount > 1) {
    return false;
  } else {
    return true;
  }
}

//The function first creates an object that stores the frequency of each character in the input string. Then it iterates through the object and checks the frequency of each character. If more than one character has an odd frequency, the function returns false, because a palindrome must have zero or one characters with odd frequency in the permutation. Otherwise, it returns true.
