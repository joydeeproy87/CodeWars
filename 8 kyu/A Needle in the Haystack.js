function findNeedle(haystack) {
  const position = haystack.indexOf('needle');
  if (position > -1) {
    return `found the needle at position ${position}`;
  }
}
