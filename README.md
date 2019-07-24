<a href="https://travis-ci.org/Xotic750/is-safe-integer-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-safe-integer-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a href="https://david-dm.org/Xotic750/is-safe-integer-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-safe-integer-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-safe-integer-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-safe-integer-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-safe-integer-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-safe-integer-x.svg"
  alt="npm version" height="18">
</a>
<a href="https://www.jsdelivr.com/package/npm/is-safe-integer-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-safe-integer-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>

<a name="module_is-safe-integer-x"></a>

## is-safe-integer-x

Determine whether the passed value is a safe integer.

<a name="exp_module_is-safe-integer-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏

This method determines whether the passed value is a safe integer.

Can be exactly represented as an IEEE-754 double precision number, and
whose IEEE-754 representation cannot be the result of rounding any other
integer to fit the IEEE-754 representation.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - A Boolean indicating whether or not the given value is a
safe integer.

| Param | Type            | Description                                      |
| ----- | --------------- | ------------------------------------------------ |
| value | <code>\*</code> | The value to be tested for being a safe integer. |

**Example**

```js
import isSafeInteger from 'is-safe-integer-x';

console.log(isSafeInteger(0)); // true
console.log(isSafeInteger(1)); // true
console.log(isSafeInteger(-100000)); // true

console.log(isSafeInteger(Math.pow(2, 53))); // false
console.log(isSafeInteger(0.1)); // false
console.log(isSafeInteger(Math.PI)); // false

console.log(isSafeInteger(NaN)); // false
console.log(isSafeInteger(Infinity)); // false
console.log(isSafeInteger(-Infinity)); // false
console.log(isSafeInteger('10')); // false
console.log(isSafeInteger(true)); // false
console.log(isSafeInteger(false)); // false
console.log(isSafeInteger([1])); // false
```
