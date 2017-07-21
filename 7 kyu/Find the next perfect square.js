function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  return (sqrt % 1 === 0) ? Math.pow((sqrt + 1), 2) : -1;
}
