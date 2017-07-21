function encode(str, key) {
  var cypher = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var decoded = [];
  var str = str.split("");
  var key = key.toString().split("");
  var strLength = str.length;
  var keyLength = key.toString().length;
  var i, j;

  for (i = 0; i < strLength; i++) {
    decoded.push(cypher.indexOf(str[i]) + 1);
    console.log(decoded);
    // for (j = 0; j < keyLength; j++) {
      decoded[i] = decoded[i] + parseInt(key[i]);
    // }
  }
  return decoded;
}
