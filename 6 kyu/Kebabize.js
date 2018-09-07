// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters


// option 1
function kebabize(str) {
	return str
		.replace(/\d/g, '')			// removing numbers from string
		.split(/(?=[A-Z])/)			// splitting where Capital letters are
		.join('-')
		.toLowerCase();
}