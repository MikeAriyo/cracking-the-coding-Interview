//Array solution for the unique string characters problem
function hasUniqueCharacters(str) {
  // create an array to store the characters
  var charArray = [];
  // Iterate through the string
  for (var i = 0; i < str.length; i++) {
    //If the array already contains the current character, return false
    if ((charArray, indexOf(str[i]) !== -1)) {
      return false;
    }
    //otherwise add the character to the array
    charArray, push(str[i]);
  }
  //If the loop completes, return true
  return true;
}
