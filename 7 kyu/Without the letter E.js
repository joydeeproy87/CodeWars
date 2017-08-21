// option 1
function findE(str) {
	return (str === null) ? null : (!str.length ? '' : ((str.toLowerCase().indexOf('e') > -1) ? String(str.match(/e/ig).length) : 'There is no "e".'));
}

// option 2
function findE(str) {
	const result = (str.match(/e/ig) || []).length;
	return result ? (''+result) : (str ? 'There is no "e".' : str);
}