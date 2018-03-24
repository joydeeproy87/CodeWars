// Given a credit card number we can determine who the issuer / vendor is with a few basic knowns.

// Complete the function getIssuer() that will use the values shown below to determine the card issuer for a given card number.If the number cannot be matched then the function should return the string Unknown.

// | Card Type | Begins With | Number Length |
// | ------------| ----------------------| ---------------|
// | AMEX | 34 or 37 | 15 |
// | Discover | 6011 | 16 |
// | Mastercard | 51, 52, 53, 54 or 55 | 16 |
// | VISA | 4 | 13 or 16 |
// 	Examples
// getIssuer(4111111111111111) == "VISA"
// getIssuer(4111111111111) == "VISA"
// getIssuer(4012888888881881) == "VISA"
// getIssuer(378282246310005) == "AMEX"
// getIssuer(6011111111111117) == "Discover"
// getIssuer(5105105105105100) == "Mastercard"
// getIssuer(5105105105105106) == "Mastercard"
// getIssuer(9111111111111111) == "Unknown"

// option 1
function getIssuer(number) {
	if (/^(34|37)\d+/g.test(number) && ('' + number).length === 15) {
		return "AMEX";
	} else if (/^6011\d+/g.test(number) && ('' + number).length === 16) {
		return "Discover";
	} else if (/^5[1-5]\d+/g.test(number) && ('' + number).length === 16) {
		return "Mastercard";
	} else if (/^4\d+/g.test(number) && (('' + number).length === 13 || ('' + number).length === 16)) {
		return "VISA";
	} else {
		return "Unknown";
	}
}

// option 2
function getIssuer(number) {
	let str = number.toString();

	// d{13} because 3[4|7] consists of 2 digits
	if (/^3[4|7]\d{13}$/.test(str)) {
		return "AMEX";
	}
	// d{12} because 6011 consists of 4 digits
	if (/^6011\d{12}$/.test(str)) {
		return "Discover";
	}
	// d{14} because 5[1-5] consists of 2 digits
	if (/^5[1-5]\d{14}$/.test(str)) {
		return "Mastercard";
	}
	// d{12} or \d{15} because 4 consists of 1 digit
	if (/^4(\d{12}|\d{15})$/.test(str)) {
		return "VISA";
	}
	return "Unknown";
}