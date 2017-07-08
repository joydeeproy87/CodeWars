function findMissingLetter(array) {
  var str = array.join('');
  var difference;
  var missingCharCode;

  for(var i = 1; i < str.length; i++){
    difference = str.charCodeAt(i) - str.charCodeAt(i-1);

    if(difference > 1) {
      missingCharCode = str.charCodeAt(i) - 1;
      return String.fromCharCode(missingCharCode);
    }
  }

  return undefined;
}
