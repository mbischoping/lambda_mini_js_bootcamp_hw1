
//	* Variables
//	-- When you create a variable in Javascript, you are creating a place to store information and giving it a name to know it by and reference it with.  A variable can hold a string, number, or equation.  All variables in your program have to be uniquely named so that you can know exactly which one you're referencing and there won't be any confusion. 
//	* Strings
//	-- Strings are held between quote marks and can be any kind of character.  Strings can be things like 'Hello world!' or '22'.  When the computer reads a string it does not assign it any value (so, '22' is just a word, and does not have any numerical value on its own).
//	* Functions (arguments, `return`)
//	-- Functions are bundles of code that you can assign a name to and "call" in the program later on.  You can call the function (using it's name) and designate variables, then give instruction in the contained function code of what to do with those variables, and what to do with the output. The computer will ignore the function code until it's called.
//	* `if` statements
//	-- 'if' statements give the computer a tast to evaluate your code, and make a decision on what to do with that code based on the outcome.  These are useful for things like "If a person's age is over 21, let them have access to this website for an alcohol brand" scenarios. 
//	* Boolean values (`true`, `false`)
//	-- Boolean values can only be true or false. They are not strings or numbers.  These are useful for if/else statements and other logic. 

//Do not change any of the function names

function multiplyByTen(num) {
	var product = num * 10;
	return product;
  //return num after multiplying it by ten
  //code here
}

function subtractFive(num) {
	var product = num - 5; 
	return product; 
  //return num after subtracting five
  //code here
}

function areSameLength(str1, str2) {
	if (str1.length === str2.length) { 
		return true;
	}
	return false;
  //return true if the two strings have the same length
  //otherwise return false
  //code here
}

function areEqual(x, y) {
	if (x === y) {
		return true;
	}
	return false;
  //return true if x and y are the same
  //otherwise return false
  //code here
}

function lessThanNinety(num) {
	if (num < 90) {
		return true;
	}
	return false;
  //return true if num is less than ninety
  //otherwise return false
  //code here
}

function greaterThanFifty(num) {
	if (num > 50) {
		return true;
	}
	return false;
  //return true if num is greater than fifty
  //otherwise return false
  //code here
}

function add(x, y) {
	var sum = x + y;
	return sum;
  //add x and y together and return the value
  //code here
}

function subtract(x, y) {
	var difference = x - y; 
	return difference;
  //subtract y from x and return the value
  //code here
}

function divide(x, y) {
	var result = x / y; 
	return result;
  //divide x by y and return the value
  //code here
}

function multiply(x, y) {
	var product = x * y; 
	return product;
  //multiply x by y and return the value
  //code here
}

function getRemainder(x, y) {
	var remainder = x % y; 
	return remainder;
  //return the remainder from dividing x by y
  //code here
}

function isEven(num) {
	if (num % 2 === 0) {
		return true;
	}
	return false;
  //return true if num is even
  //otherwise return false
  //code here
}

function isOdd(num) {
	if (num % 2 === 0) {
		return false;
	}
	return true;
  //return true if num is false
  //otherwise return false
  //code here
}

function square(num) {
	var squareNum = num * num; 
	return squareNum;
  //square num and return the new value
  //code here
}

function cube(num) {
	var cubeNum = num * num * num; 
	return cubeNum; 
  //cube num and return the new value
  //code here
}

function raiseToPower(num, exponent) {
	return Math.pow(num, exponent);
  //raise num to whatever power is passed in as exponent
  //code here
}

function roundNumber(num) {
	return Math.round(num);
  //round num and return it
  //code here
}

function roundUp(num) {
	return Math.ceil(num);
  //round num up and return it
  //code here
}

function addExclamationPoint(str) {
	var newString = str + '!'; 
	return newString;
  //add an exclamation point to the end of str and return the new string
  //'hello world' -> 'hello world!'
  //code here
}

function combineNames(firstName, lastName) {
	var fullName = firstName + ' ' + lastName; 
	return fullName;
  //return firstName and lastName combined as one string and separated by a space.
  //'Lambda', 'School' -> 'Lambda School'
  //code here
}

function getGreeting(name) {
	var greeting = 'Hello ' + name + '!'; 
	return greeting;
  //Take the name string and concatenate other strings onto it so it takes the following form:
  //'Sam' -> 'Hello Sam!'
  //code here
}

//If you can't remember these area formulas then head over to Google or look at the test code.
 
function getRectangleArea(length, width) {
	return length * width;
  //return the area of the rectangle by using length and width
  //code here
}

function getTriangleArea(base, height) {
	return 0.5 * base * height;
  //return the area of the triangle by using base and height
  //code here
}

function getCircleArea(radius) {
	var circleArea =  Math.PI*Math.pow(radius, 2); 
	return Math.round(circleArea);
  //return the rounded area of the circle given the radius
  //code here
}

function getRectangularPrismVolume(length, width, height) {
	var volume = length * width * height;
	return volume;
  //return the area of the 3D rectangular prism given the length, width, and height
  //code here
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
