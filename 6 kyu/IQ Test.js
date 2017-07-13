function iqTest(numbers){
  var numbers = numbers.split(" ").map(x => parseInt(x, 10));

  const odd = numbers.filter(x => x%2 === 1);
  const even = numbers.filter(x => x%2 === 0);

  return odd.length > even.length ? (numbers.indexOf(even[0]) + 1) : (numbers.indexOf(odd[0]) + 1);
}
