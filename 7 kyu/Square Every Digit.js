function squareDigits(num) {
  return Number(("" + num).split('').map(x => x * x).join(''));
}
