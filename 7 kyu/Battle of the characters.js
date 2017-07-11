function battle(x, y) {
  var power = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
  var sumx = 0;
  var sumy = 0;

  x.split("").forEach(function (letter) {
    sumx += power.indexOf(letter) + 1;
  });

  y.split("").forEach(function (letter) {
    sumy += power.indexOf(letter) + 1;
  });

  return (sumx > sumy) ? x : ((sumy > sumx) ? y : "Tie!");
}
