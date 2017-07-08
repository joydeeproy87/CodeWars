function positiveSum(arr) {
  function add(a, b) {
    if(b > 0) {return a + b;}
    else {return a;}
  }
  return (arr.length) ? arr.reduce(add, 0) : 0;
}
