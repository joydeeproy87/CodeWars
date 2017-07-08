function findMultiples(int, limit) {
  var result = [];
  for(var i = int; i <= limit; i+=int) {
    result.push(i);
  }
  return result;
}
