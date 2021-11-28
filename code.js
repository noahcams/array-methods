// Sample arrays for testing
const nums = [-3, -1, 0, 1, 2, 30, 45, 678];
let words = ['Chinese', 'struggle', 'fortitude', 'five', 'predicate', 'juice'];

/** Array.prototype.includes rewritten
 * Determines whether an array includes a certain element, returning true or false as appropriate.
 */
Array.prototype.newIncludes = function (value) {
	for (let i = 0; i < this.length; i++) {
		if (this[i] === value) {
			return true;
		}
	}
	return false;
};

/** Array.prototype.concat rewritten
 * Combines two or more arrays. This method returns a new array without modifying any existing arrays.
 */
Array.prototype.newConcat = function (array) {
	return [...this, ...array];
};

/** Array.prototype.join rewritten.
 * Adds all the elements of an array into a string, separated by the specified separator string.
 */
Array.prototype.newJoin = function (separator) {
	if (separator === undefined) separator = ',';
	let result = '';
	for (let i = 0; i < this.length - 1; i++) {
		result += this[i] + separator;
	}
	result += this[this.length - 1];
	return result;
};

/** Array.prototype.some rewritten
 * Determines whether the specified callback function returns true for any element of an array.
 */
Array.prototype.newSome = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			return true;
		}
	}
	return false;
};

/** Array.prototype.findIndex rewritten
 * Returns the index of the first element in the array where predicate is true, and -1 otherwise.
 */
Array.prototype.newFindIndex = function (callback) {
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			return i;
		}
	}
	return -1;
};

/** Array.prototype.map rewritten
 * Calls a defined callback function on each element of an array, and returns an array that contains the results.
 */
Array.prototype.newMap = function (callback) {
	const newArray = [];
	for (let i = 0; i < this.length; i++) {
		newArray.push(callback(this[i], i, this));
	}
	return newArray;
};

/** Array.prototype.filter rewritten
 * Returns the elements of an array that meet the condition specified in a callback function.
 */
Array.prototype.newFilter = function (callback) {
	const newArray = [];
	for (let i = 0; i < this.length; i++) {
		if (callback(this[i], i, this)) {
			newArray.push(this[i]);
		}
	}
	return newArray;
};

// (Decided not to use the prototype for this one because recursion wasn't working 
// properly)
/** Array.prototype.flat rewritten 
 * Returns a new array with all sub-array elements concatenated into it recursively
 * up to the specified depth
 */
function newFlat(arr, depth) {
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			arr.splice(i, 1, ...arr[i]);
		}
	}
	depth -= 1;
	if (depth > 0) {
		newFlat(arr, depth);
	}
	return arr;
}

/** Array.prototype.reduce rewritten
 * Calls the specified callback function for all the elements in an array. The return
 * value of the callback function is the accumulated result, and is provided as an
 * argument in the next call to the callback function.
 */
Array.prototype.newReduce = function (callback, accumulator) {
	for (let i = 0; i < this.length; i++) {
		accumulator = callback(accumulator, this[i], i, this);
	}
	return accumulator;
};
