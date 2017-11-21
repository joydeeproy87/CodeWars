// A number n is called prime happy if there is at least one prime less than n and the sum of all primes less than n is evenly divisible by n. Write isPrimeHappy(n) which returns true if n is prime happy else false.


function isPrimeHappy(n) {
	const primeNumbers = [];
	for (let i = 1; i < n; i++) {
		if (isPrimeNumber(i)) {
			primeNumbers.push(i);
		}
	}
	return primeNumbers.length == 0 ? false : primeNumbers.reduce((s, i) => s + i) % n == 0;
}

function isPrimeNumber(n) {
	if (n == 1) {
		return false;
	}
	if (n == 2) {
		return true;
	}
	for (let i = 2; i < Math.sqrt(n) + 1; i++) {
		if (n % i == 0) {
			return false;
		}
	}
	return true;
}
