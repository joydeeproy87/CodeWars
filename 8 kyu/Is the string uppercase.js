// Is the string uppercase?

// Task

// Create a method is_uppercase() to see whether the string is ALL CAPS. For example:

// is_uppercase("c") == False
// is_uppercase("C") == True
// is_uppercase("hello I AM DONALD") == False
// is_uppercase("HELLO I AM DONALD") == True
// is_uppercase("ACSKLDFJSgSKLDFJSKLDFJ") == False
// is_uppercase("ACSKLDFJSGSKLDFJSKLDFJ") == True


// option 1
String.prototype.isUpperCase = function () {
  return this.valueOf().toUpperCase() === this.valueOf();
};

// option 2
String.prototype.isUpperCase = function () {
  return this.toUpperCase() === this.toString();
};