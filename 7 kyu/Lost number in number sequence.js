function findDeletedNumber(arr, mixArr) {
  function sortNumber(a, b) {
    return a-b;
  }
  var arr = arr.sort(sortNumber);
  var mixArr = mixArr.sort(sortNumber);
  var missing = [];

  if( (arr.length === mixArr.length) && arr.every(function(elem, index) { return elem === mixArr[index]; }) ) {
    return 0;
  }
  else {
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] !== mixArr[i]) {
        missing.push(arr[i]);
      }
    }
    return missing[0];
  }
}
