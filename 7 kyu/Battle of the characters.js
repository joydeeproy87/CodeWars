function findSumOfWord ( word ) {
    var letterValues = {
      A: 1,
      B: 2,
      C: 3,
      D: 4,
      E: 5,
      F: 6,
      G: 7,
      H: 8,
      I: 9,
      J: 10,
      K: 11,
      L: 12,
      M: 13,
      N: 14,
      O: 15,
      P: 16,
      Q: 17,
      R: 18,
      S: 19,
      T: 20,
      U: 21,
      V: 22,
      W: 23,
      X: 24,
      Y: 25,
      Z: 26

    };

    return word.split("").reduce( function ( sum, value ) {
        return letterValues[value] + sum;
    }, 0 );
}

function battle ( word1, word2 ) {
    var sumOfWord1 = findSumOfWord( word1 );
    var sumOfWord2 = findSumOfWord( word2 );

    return sumOfWord1 > sumOfWord2 ? word1 : ( sumOfWord1 === sumOfWord2 ? "Tie!" : word2 );
}
