function howMuchILoveYou(nbPetals) {
  var phrase = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return phrase[(nbPetals - 1) % 6];
}
