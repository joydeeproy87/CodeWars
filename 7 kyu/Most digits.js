function findLongest(array){
	let result, length = 0, i;
	for(i = 0; i < array.length; i++) {
		if (array[i].toString().length > length) {
			result = array[i];
			length = array[i].toString().length;
		}
	}
	return result;
}