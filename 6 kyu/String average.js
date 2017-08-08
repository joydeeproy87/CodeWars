function averageString(str) {
  const num = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
  let sum = 0;
  let average = 0;

  str = str.split(' ');
  if(!str.length) {
    return "n/a";
  }

  for (var i = 0; i < str.length; i++) {
    if(num.indexOf(str[i]) !== -1) {
      sum += num.indexOf(str[i]);
    } else {
      return "n/a";
    }
  }

  average = Math.floor(sum / str.length);
  return num[average];
}
