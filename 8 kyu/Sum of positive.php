function positive_sum($arr) {
  $total = 0;
  foreach ($arr as $number) {
    $total += ($number > 0) ? $number : 0;
  }
  return $total;
}
