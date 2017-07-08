function descendingOrder(n) {
  var n = n.split("").map(Number).sort(function(a,b) { return b-a; });
}
