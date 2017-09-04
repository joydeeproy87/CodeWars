// Hey Codewarrior!

// You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.


// This Cube function needs help
// change the constructor so that it can take an integer for the side or no args



// option 1
function Cube(n) {
	var side = 0;

	this.getSide = function() { return side; };
	this.setSide = function(n) {
		return isNaN(n) ? 0 : side = Math.abs(n);
	};
}


// option 2
class Cube {
	constructor(n) {
		this.side = n || 0;
	}
	getSide() {
		return this.side;
	}
	setSide(n) {
		if(!isNaN(n)) {
			this.side = Math.abs(n);
		}
	}
};