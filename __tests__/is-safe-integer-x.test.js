let isSafeInteger;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isSafeInteger = require('../../index.js');
} else {
  isSafeInteger = returnExports;
}

describe('isSafeInteger', function() {
  it('is a function', function() {
    expect(typeof isSafeInteger).toBe('function');
  });

  it('should return true', function() {
    isSafeInteger(0);
    isSafeInteger(-0);
    isSafeInteger(1);
    isSafeInteger(-100000);
    isSafeInteger(Number.MAX_SAFE_INTEGER);
    isSafeInteger(Number.MIN_SAFE_INTEGER);
  });

  it('should return false', function() {
    isSafeInteger(Number.MAX_SAFE_INTEGER + 1);
    isSafeInteger(Number.MIN_SAFE_INTEGER - 1);
    isSafeInteger(0.1);
    isSafeInteger(-0.1);
    isSafeInteger(Math.PI);
    isSafeInteger(NaN);
    isSafeInteger(Infinity);
    isSafeInteger(-Infinity);
    isSafeInteger('10');
    isSafeInteger(true);
    isSafeInteger(false);
    isSafeInteger([1]);
  });
});
