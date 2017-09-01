function stringTask(s) {
	let delVow = s.replace(/[aeiou]/ig, '');
	let insChar = delVow.replace(/[^aeiou]/ig, '.$1');
	let uppCons = insChar.replace(/[^AEIOU]/g, '');
}