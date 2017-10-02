// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
// Examples:
//
// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

// option 1
function solution(str) {
  return (str + '_').match(/.{2}/g);
}

// option 2
function solution(str) {
  return ((str.length % 2) ? (str + '_') : str).match(/.{2}/g);
}
