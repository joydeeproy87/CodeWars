var sum_pairs = function sum_pairs(ints, s) {
  var seen = {};
  var i = 0;
  var length = ints.length;

  for (i; i < length; ++i) {
    if (seen[s - ints[i]]) {
      return [s - ints[i], ints[i]];
    }
    seen[ints[i]] = true;
  }
};
