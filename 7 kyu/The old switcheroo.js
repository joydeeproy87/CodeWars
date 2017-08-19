function vowel2index(str) {
	return str.replace(/[aeiou]/ig, (match, index) => index + 1);
}