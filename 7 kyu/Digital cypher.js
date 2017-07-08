function encode(str, key) {
  var cypher = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var decoded = [];

  for(var i = 0; i < str.length; i++) {
    decoded.push(cypher.indexOf(str[i])+1);
    console.log(decoded);
  }

  var key = key.split();
}
