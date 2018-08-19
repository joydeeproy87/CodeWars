// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.


// option 1
function wordsToMarks(s) {
   let marks = 0;
   for (let i = 0; i < s.length; i++) {
      marks += s.charCodeAt(i) - 96;
   }
   return marks;
}

// option 2
function wordsToMarks(s) {
   return s.split('')
      .map(x => x.charCodeAt(0) - 96)
      .reduce((a, b) => a + b);
}