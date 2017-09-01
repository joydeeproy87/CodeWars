function stringTask(s) {
	s = s.replace(/[aeiouy]/gi, '').toLowerCase();
	return !s.length ? '' : '.' + s.split('').join('.');
}