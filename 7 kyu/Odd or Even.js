function oddOrEven(array) {
  return (array.reduce((x, y) => { return x + y }, 0) % 2) ? "odd" : "even";
}
