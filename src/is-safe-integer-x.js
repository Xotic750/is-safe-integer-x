import isInteger from 'is-integer-x';
import MAX_SAFE_INTEGER from 'max-safe-integer';

const MIN_SAFE_INTEGER = -MAX_SAFE_INTEGER;

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
const isSafeInteger = function isSafeInteger(value) {
  return isInteger(value) && value >= MIN_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
};

export default isSafeInteger;
