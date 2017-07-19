function longest(s1, s2) {
  let concatStr = s1 + s2;
  let result = [];

  concatStr = (s1 + s2).split('').sort();
  for(let i = 0; i < concatStr.length; i++) {
    if(concatStr[i] !== concatStr[i+1]) {
      result.push(concatStr[i]);
    }
  }
  return result.join('');
}
