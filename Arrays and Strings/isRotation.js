function isRotation(s1, s2) {
    // check if the lengths of the two strings are equal
    if (s1.length !== s2.length) {
        return false;
    }
    // concatenate s1 with itself to check if s2 is a substring
    return (s1 + s1).indexOf(s2) !== -1;
}