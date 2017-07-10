function sumArray(arr) {
  return (arr == null) || (arr.length <2) ? 0 : arr.reduce((a, b) => a + b, 0 ) - Math.max(...arr) - Math.min(...arr);
}
