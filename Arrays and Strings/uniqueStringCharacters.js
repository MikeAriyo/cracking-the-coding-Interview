// Given a string, write a function in javascript to check if the string has all unique characters

function hasUniqueCharacters(str) {
  // create a set to store the characters
  var charSet = new Set();

  // Iterate through the string
  for (var i = 0; i < str.length; i++) {
    // If the set already contains the current character, return false
    if (charSet.has(str[i])) {
      return false;
    }

    //otherwise, add the character to the set
    charSet.add(str[i]);
  }
  //If the loop completes, return true
  return true;
}
