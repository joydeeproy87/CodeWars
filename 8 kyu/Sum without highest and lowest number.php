function sumArray($array) {
  return ($array === null) || (sizeof($array) < 2) ? 0 : array_sum($array) - max($array) - min($array);
}
