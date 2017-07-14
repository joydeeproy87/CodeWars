const sum_pairs = (ints, s) => {
  let result = undefined;
  let length = ints.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (ints[i] + ints[j] === s) {
        length = j;
        result = [ints[i], ints[j]];
        break;
      }
    }
  }
  return result;
}
