function accum(s) {
  var length = s.length;
  var result = '';

  for(var i = 0; i < length; i++) {
    for(var j = 0; j <= i; j++) {
      if(j === 0)
        result += s[i].toUpperCase();
      else
        result += s[i].toLowerCase();
    }
    if(i < length-1) {
      result += '-';
    }
  }
  return result;
}
