function persistence(num) {
  var count = 0;
  while(num.toString().length > 1) {
    num = num.toString().split('').reduce(function(a, b) { return a*b; });
    count++;
  }
  return count;
}
