function longestWord(stringOfWords){
  stringOfWords = stringOfWords.split(' ');
  var maxLength = 0;
  var longWord = '';

  for(var i = 0; i < stringOfWords.length; i++){
    if(maxLength <= stringOfWords[i].length){
      maxLength = stringOfWords[i].length;
      longWord = stringOfWords[i];
    }
  }

  return longWord;
}
