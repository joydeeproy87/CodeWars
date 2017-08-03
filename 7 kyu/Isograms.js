function isIsogram(str) {
  if(!str) {
    return true;
  } else {
      const sorted = str.toLowerCase().split('').sort();
      for(let i = 0; i < str.length; i++) {
        if(sorted[i] === sorted[i+1])
          return false;
      }
      return true;
  }
}
