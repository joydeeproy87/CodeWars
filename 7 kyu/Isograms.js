function isIsogram(str) {
  return str.toLowerCase().split('').map(x => str.charAt(x)).sort((x, y) => x - y);
}
