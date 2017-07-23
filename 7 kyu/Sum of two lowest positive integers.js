function sumTwoSmallestNumbers(numbers) {
  const sorted = numbers.sort((x, y) => x - y);
  return sorted[0] + sorted[1];
};
