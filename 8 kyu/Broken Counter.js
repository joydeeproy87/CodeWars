// option 1
function Counter() {
	this.value = 0;
}

Counter.prototype = {
	increase : function() {
		return this.value++;
	},
	getValue : function() {
		return this.value;
	},
	reset : function() {
		return this.value = 0;
	}
};

// option 2
function Counter() {
	this.value = 0;
}

Counter.prototype.increase = function () {
	return this.value++;
};

Counter.prototype.getValue = function () {
	return this.value;
};

Counter.prototype.reset = function () {
	return this.value = 0;
};