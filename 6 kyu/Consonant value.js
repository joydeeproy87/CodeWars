// A consonant is any letter of the alphabet except a, e, i, o, u.The consonant substrings in the word "zodiacs" are z, d, cs.Assuming a = 1, b = 2 ...z = 26, the values of these substrings are 26, 4, 22 because z = 26, d = 4, cs = 3 + 19=22. The maximum value of these substrings is 26. Therefore, solve("zodiacs") = 26.

// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings.

function solve(s) {
	return s.split(/[aeiou]+/).reduce((s, n) => Math.max(s, n.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0)), 0);
};