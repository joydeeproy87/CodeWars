var sum_pairs = function sum_pairs(ints, s) {
  var film = [];
  var pair = [];
  var holder;

  for (var i = 0; i < ints.length; i++) {
    holder = s - ints[i];
    for (var j = 0; j < ints.length; j++) {
      if (holder == ints[j] && i !== j && i - j > 0) {
        var indices = i + j;
        var distance = i - j;
        film.push([distance, indices, [holder, ints[i]]]);
      }
    }
  }
  if (film.length == 0) {
    return film[1];
  } else {
    pair = film.sort(function (a, b) {
      return a[0] - b[0];
    });
    return pair[0][2];
  }
};
