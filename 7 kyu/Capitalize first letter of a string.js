String.prototype.capitalize = function () {
  let letter = this.charCodeAt(0);

  // charcode of 'a' - 32 = 'A'
  if (letter >= 97 && letter <= 122) {
    return String.fromCharCode(letter - 32) + this.slice(1);
  }
  return this.toString();
};
