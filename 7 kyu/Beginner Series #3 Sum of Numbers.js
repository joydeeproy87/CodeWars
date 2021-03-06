// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it.If the two numbers are equal return a or b.

// 	Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

// option 1
function GetSum(a, b) {
	let total = 0;
	if (a === b) {
		return a;
	}
	if (a < b) {
		for (let i = a; i <= b; i++) {
			total += i;
		}
		return total;
	}
	if (b < a) {
		for (let i = b; i <= a; i++) {
			total += i;
		}
		return total;
	}
}

// option 2
function GetSum(a, b) {
	const max = Math.max(a, b);
	let current = Math.min(a, b);
	let sum = 0;
	while (current <= max) {
		sum += current;
		current++;
	}
	return a === b ? a : sum;
}