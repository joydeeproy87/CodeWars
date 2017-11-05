// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
// For example:
//
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]


const uniqueInOrder = iterable => {
   if (iterable.length === 0) {
      return [];
   }

   // defining an array with the first letter from the iterable
   const arr = [iterable[0]];

   // checking if type of iterable is a 'string'
   if (typeof iterable === 'string') {
      iterable = iterable.split('');
   }

   // pushing only if the previous value does not matches the current value
   iterable.reduce((prev, curr) => {
      if (prev !== curr) {
         arr.push(curr);
      }
      return curr;
   });

   return arr;
};
