function highAndLow(numbers) {
  var numbers = numbers.split(" ").map(Number);
  var max = numbers[0], min = numbers[0];
  for(var i=0; i < numbers.length; i++){
    if(numbers[i] > max)
      max = numbers[i];
    else if (numbers[i] < min)
      min = numbers[i];
  }
  return max + " " + min;
}
