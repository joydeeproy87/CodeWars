function order(words) {
  return words.split(' ').sort((word1, word2) => {
    return word1.match(/\d/) - word2.match(/\d/);
  }).join(' ');
}
