function disemvowel(str) {
  const vowels = ['a','e','i','o','u'];
  return str.split('').filter(x => !vowels.includes(x.toLowerCase())).join('');
}
