function getCount(str) {
  var vowelsCount = 0;
  var str = str.toLowerCase().split('');

  for(var i = 0; i < str.length; i++){
    switch(str[i]){
      case 'a':
        vowelsCount++;
        break;
      case 'e':
        vowelsCount++;
        break;
      case 'i':
        vowelsCount++;
        break;
      case 'o':
        vowelsCount++;
        break;
      case 'u':
        vowelsCount++;
        break;
      default:
        break;
    }
  }
  return vowelsCount;
}
