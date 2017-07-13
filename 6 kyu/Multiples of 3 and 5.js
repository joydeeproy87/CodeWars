function solution(number) {
  let sum = 0, i = 1;

  for (i; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
