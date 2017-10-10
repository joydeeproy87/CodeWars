// Sometimes people get tattoos, sometimes they wish they hadn't, sometimes the tattoos must go. Lets create a robot that can remove tattoos.
//
// Your robot function accepts one array argument called skinScan. I have supplied an example array below.
//
// [
// [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ','X','X',' ',' ',' ','X','X',' ',' '],
// [' ','X',' ',' ','X',' ','X',' ',' ','X',' '],
// [' ','X',' ',' ',' ','X',' ',' ',' ','X',' '],
// [' ','X',' ',' ',' ','X',' ',' ',' ','X',' '],
// [' ','X',' ',' ',' ',' ',' ',' ',' ','X',' '],
// [' ','X',' ',' ',' ',' ',' ',' ',' ','X',' '],
// [' ','X',' ',' ',' ',' ',' ',' ',' ','X',' '],
// [' ',' ','X',' ',' ',' ',' ',' ','X',' ',' '],
// [' ',' ',' ','X',' ',' ',' ','X',' ',' ',' '],
// [' ',' ',' ',' ','X',' ','X',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ','X',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ','X',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
// ]
// Your task is to create a function for the robot function that will zap away the Xs and replace them with *s. Any array values that are not Xs must be left alone. Below is what skinScan should look like after the tattoo has been removed.
//
// [
// [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ','*','*',' ',' ',' ','*','*',' ',' '],
// [' ','*',' ',' ','*',' ','*',' ',' ','*',' '],
// [' ','*',' ',' ',' ','*',' ',' ',' ','*',' '],
// [' ','*',' ',' ',' ','*',' ',' ',' ','*',' '],
// [' ','*',' ',' ',' ',' ',' ',' ',' ','*',' '],
// [' ','*',' ',' ',' ',' ',' ',' ',' ','*',' '],
// [' ','*',' ',' ',' ',' ',' ',' ',' ','*',' '],
// [' ',' ','*',' ',' ',' ',' ',' ','*',' ',' '],
// [' ',' ',' ','*',' ',' ',' ','*',' ',' ',' '],
// [' ',' ',' ',' ','*',' ','*',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ','*',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ','*',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
// [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
// ]


// option 1
function robot(skinScan) {
  return skinScan.map((arr) => {
    return arr.map((char) => ({'X': '*'})[char] || char);
  });
}


//option 2
function robot(skinScan) {
  return skinScan.map(arr => arr.map(s => s === 'X' ? '*' : s));
}
