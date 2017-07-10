function getMiddle(s) {
  var length = s.length;
  var i = parseInt(length / 2);

  return (length % 2 === 0) ? s[i-1] + s[i] : s[i];
  // if(length % 2 === 0) return s[i-1] + s[i];
  // else return s[i];
}
