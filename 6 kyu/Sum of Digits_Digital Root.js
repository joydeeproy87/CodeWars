function digital_root(n) {
  var n = n.toString(10).split("").map(Number).reduce((x, y) => x + y, 0);
  return n > 9 ? digital_root(n) : n;
}
