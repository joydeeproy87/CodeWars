String.prototype.toAlternatingCase = function () {
  let i, letter = "", flipped = "";
  for (i = 0; i < this.length; i++) {
    letter = this[i];
    letter = (letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) ? letter.toLowerCase() : letter.toUpperCase();
    flipped += letter;
  }
  return flipped;
}
