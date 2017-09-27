function sumStrings(a, b) {
  // reversing test strings
  a = a.split('').reverse();
  b = b.split('').reverse();

  var i = 0, remainder = 0;
  var sumofDigits = [];

  // looping till maximum number of digits between two numbers and remainder is not '0'
  while (i < a.length || i < b.length || remainder != 0) {

    // saving current a[i] and b[i] to aDigit and bDigit respectively
    var aDigit = i < a.length ? parseInt(a[i]) : 0;
    var bDigit = i < b.length ? parseInt(b[i]) : 0;

    var digitSum = aDigit + bDigit + remainder;
    sumofDigits.push((digitSum % 10).toString());
    remainder = Math.floor(digitSum / 10);
    i++;
  }

  sumofDigits.reverse();

  // test case if both the numbers are '0'
  while (sumofDigits[0] == '0') {
    sumofDigits.shift();
  }

  return sumofDigits.join('');
}
