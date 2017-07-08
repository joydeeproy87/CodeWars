String.prototype.toAlternatingCase = function (s) {
  for (var i = 0; i < s.length; i++) {
    if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      s[i] = s[i].toUpperCase();
    } else {
      s[i] = s[i].toLowerCase();
    }
  }
  return s;
}
