function replaceDashesAsOne(str) {
  var sorted = str.split('');
  for (var i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] == '-' && sorted[i + 1] == '-') {
      sorted.splice(i + 1, 1);
      i = i - 1;
      continue;
    }
    if (sorted[i] == '-' && sorted[i + 1] == ' ') {
      for (var j = i + 2; j < sorted.length; j++) {
        if (sorted[j] == '-') {
          sorted.splice(i + 1, j - i);
          i = i - 1;
          break;
        } else if (sorted[j] == ' ') {
          continue;
        } else {
          break;
        }
      }
    }
  }
  return sorted.join('');
}
