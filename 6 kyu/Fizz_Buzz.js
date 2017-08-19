function solution(number) {
   let A = [], B = [], C = [];

   for (let i = 1; i < number; i++) {
      if (i % 3 === 0 && i % 5 !== 0) {
         A.push(i);
      }
      if (i % 3 !== 0 && i % 5 === 0) {
         B.push(i);
      }
      if (i % 3 === 0 && i % 5 === 0) {
         C.push(i);
      }
   }
   return [A.length, B.length, C.length];
}