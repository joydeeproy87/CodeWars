// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x) {
	const words = x.split(' ');
	let maxScore = 0;
	let result = '';

	for (const element of words) {
		let value = 0;

		for (let j = 0; j < element.length; j++) {
			value += element.charCodeAt(j) - 96;
		}

		if (value > maxScore) {
			maxScore = value;
			result = element;
		}
	}

	return result;
}