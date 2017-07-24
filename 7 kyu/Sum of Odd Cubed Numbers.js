function cubeOdd(arr) {
  if(!arr.some(isNaN)) {
    return arr.filter(function(x) {
      if(x % 2 !== 0) {
        return x
      }
    }).map(x => Math.pow(x, 3) ).reduce((x, y) => x + y, 0);
  }
  else {
    return undefined;
  }
}
