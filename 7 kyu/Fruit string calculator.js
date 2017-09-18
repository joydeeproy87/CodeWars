// Given a string of words and numbers. Extract the expression including:

// the operator: either addition or subtraction
// the two numbers that we are operating on
// Return the result of the calculation.

// Example:

// "Panda has 48 apples and loses 4" returns 44

// "Jerry has 34 apples and gains 6" returns 40

// "loses" and "gains" are the only two words describing operators.

// Should be a nice little kata for you :)

// Note: No fruit debts nor bitten apples = The numbers are integers and no negatives


// option 1
function calculate(string) {
	let num = string.match(/[0-9]+/g);
	let sign = string.match(/(loses|gains)/g);
	sign = (sign[0] === 'loses' ? '-' : '+');
	return eval(num[0] + sign + num[1]);
}

// option 2
// using RegEX
function calculate(string) {
	return eval(string.match(/\d+|loses|gains/g).join('').replace('loses', '-').replace('gains', '+'));
}

// option 3
// using ES6 array destructuring
function calculate(string) {
	let [num1, num2] = string.match(/\d+/g);
	console.log(num1, num2);
	return (/loses/.test(string)) ? (+num1 - +num2) : (+num1 + +num2);
}
