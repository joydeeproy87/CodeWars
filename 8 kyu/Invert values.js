function invert(array) {
  return array.map(function(n) {
    return (n === 0) ? n : -n;
  })
}
