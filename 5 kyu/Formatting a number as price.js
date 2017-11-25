// Your objective is to add formatting to a plain number to display it as price.
//
// The function should return a string like this:
//
// var price = numberToPrice(13253.5123);
// console.log(price); // 13,253.51
// Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.
//
// function should return a string 'NaN' if the input is not a valid number


let numberToPrice = number => {
	if (isNaN(number) || !number) {
		return 'NaN';
	}

	number = number.toString().split('.');

	let int = number[0];
	let decimal = number[1];

	int = int.split('').reverse();
	let count = 0;
	for (let i = 0; i < int.length; i++) {
		if (count === 3 && int[i] !== '-') {
			int.splice(i, 0, ',');
			count = 0;
		} else {
			count++;
		}
	}

	let formattedInt = int.reverse().join('');
	let formattedDecimal = decimal ? (decimal + '0').substr(0, 2) : '00';

	return [formattedInt, formattedDecimal].join('.');
}
