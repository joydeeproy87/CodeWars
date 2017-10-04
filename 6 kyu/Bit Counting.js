// Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
//
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

// option 1
const countBits = function countBits(n) {
	let binary = parseInt(n, 10).toString(2);
	binary = binary.match(/1/g) || 0;
	return binary.length || 0;
};

// option 2
const countBits = function countBits(n) {
	return n.toString(2).split('0').join('').length;
};
