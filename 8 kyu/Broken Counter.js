function Counter() {
  this.value = 0;
}

// prototype declarations should be annonymous functions
Counter.prototype.increase = function () {
  this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};
