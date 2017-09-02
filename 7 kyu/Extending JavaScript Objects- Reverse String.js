// Unfortunately, there's no a .reverse() method for the JavaScript String object.

// Your task is to extend JavaScript String object, so you can reverse strings just like this:

// 'Hello, World!'.reverse();
// The method should return:

// '!dlroW ,olleH'


// option 1
String.prototype.reverse = function () {
	var length = this.length,
	    userStr = '',
	    revStr = '';

	for (i = 0; i < length; i++) {
		userStr += this[i];
	}
	while (length--) {
		revStr += userStr[length];
	}
	return revStr;
};


// option 2
String.prototype.reverse = function() {
	return this.split('').reverse().join('');
};