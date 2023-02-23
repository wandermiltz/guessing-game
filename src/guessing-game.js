class GuessingGame {
	constructor() {
	}

	setRange(min, max) {
		this.min = min
		this.max = max
	}

	guess() {
		this.guessNum = Math.round((this.max - this.min) / 2) + this.min
		return this.guessNum
	}

	lower() {
		this.max = this.guessNum
	}

	greater() {
		this.min = this.guessNum
	}
}

module.exports = GuessingGame;
