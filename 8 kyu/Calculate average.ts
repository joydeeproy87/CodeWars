/* Write function avg which calculates average of numbers in given list. */

export function find_average(array) {
	return array.reduce((x, y) => x + y, 0) / array.length;
}
