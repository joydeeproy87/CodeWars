function squareSum(numbers) {
  return numbers.map(function(x) {
    return x * x;
  }).reduce(function(sum, number) {
    return sum + number;
  });
}
