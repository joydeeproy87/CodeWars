class Guesser {
	constructor(number, lives) {
		this.number = number;
		this.lives = lives;
	}

	guess(n) {
		if (this.lives <= 0) {
			throw new Error();
		}
		let condition = n === this.number;
		if(!condition) {
			this.lives--;
		}
		return condition;
	}
}