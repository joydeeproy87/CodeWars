// option 1
function isItANum(str) {
	const number = (str.match(/[0-9]/g)).join('');
	const length = number.length;
	return (length === 11) ? number : 'Not a phone number';
}

// option 2
function isItANum(str) {
	return (str.replace(/\D/g,'').match(/^0\d{10}$/) || ['Not a phone number'])[0];
}