import isInteger from 'is-integer-x';
var MAX_SAFE_INTEGER = 9007199254740991;
var MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;
/**
 * This method determines whether the passed value is a safe integer.
 *
 * Can be exactly represented as an IEEE-754 double precision number, and
 * whose IEEE-754 representation cannot be the result of rounding any other
 * integer to fit the IEEE-754 representation.
 *
 * @param {*} value - The value to be tested for being a safe integer.
 * @returns {boolean} A Boolean indicating whether or not the given value is a
 *  safe integer.
 */

var isSafeInteger = function isSafeInteger(value) {
  return isInteger(value) && value >= MIN_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
};

export default isSafeInteger;

//# sourceMappingURL=is-safe-integer-x.esm.js.map