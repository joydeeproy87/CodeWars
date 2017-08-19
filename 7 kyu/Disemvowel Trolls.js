// option 1 - using Regex
function disemvowel(str) {
	return str.replace(/[aeiou]/gi, '');
}

// option 2 - using ES6
function disemvowel(str) {
  const vowels = ['a','e','i','o','u'];
  return str.split('').filter(x => !vowels.includes(x.toLowerCase())).join('');
}