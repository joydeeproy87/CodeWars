// Write function hexToDec which converts hex number (given as a string) to decimal number.

// option 1
export function hexToDec(hexString:string):number{
   const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
   return hexString
      .toUpperCase()
      .split("")
      .reverse()
      .map((value, index) => hex.indexOf(value) * Math.pow(16, index))
      .reduce((sum, value) => ((value < 0) ? (-1 * sum) : (sum + value)), 0);
}

// option 2
export function hexToDec(hexString: string): number {
   return parseInt(hexString, 16);
}
