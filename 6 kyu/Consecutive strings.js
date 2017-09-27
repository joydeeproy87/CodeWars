// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".


// option 1
function longestConsec(strarr, k) {
	const n = strarr.length;
	let str = '';
	let temp = '';

	if (n === 0 || k > n || k <= 0) {
		return '';
	} else {
		for (let i = 0; i < n; i++) {
			// saving the longest string consisting of k consecutive strings with in 'temp' variable
			temp = strarr.slice(i, i + k).join('');
			// checking if 'temp' value is the largest consecutive string
			if (temp.length > str.length) {
				str = temp;
			}
		}
	}
	return str;
}


// option 2 - more optimized
function longestConsec(strarr, k) {
	if (strarr === [] || k > strarr.length || k <= 0) {
		return '';
	}
	return strarr
		.map((value, index) => strarr.slice(index, index + k).join(''))
		.reduce((longest, current) => current.length > longest.length ? current : longest);
}
