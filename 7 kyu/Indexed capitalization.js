// Given a string and an array of integers representing indices, capitalize all letters at the given indices.
//
// For example:
//
// capitalize("abcdef",[1,2,5]) = "aBCdeF"
// capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
// The input will be a lowercase string with no spaces and an array of digits.
//
// Good luck!
//
// Be sure to also try:
//
// Alternate capitalization
//
// String array revisal


// option 1
function capitalize(s, arr) {
   var stringAsArray = s.split('');
   arr.map(function (val, i) {
      return stringAsArray.splice(val, 1, s.charAt(val).toUpperCase());
   });

   return stringAsArray.join('');
}


// option 2
function capitalize(s, arr) {
   var stringAsArray = s.split('');
   for (var i = 0; i < arr.length; i++) {
      if (stringAsArray[arr[i]]) {
         stringAsArray[arr[i]] = stringAsArray[arr[i]].toUpperCase();
      }
   }

   return stringAsArray.join('');
}
