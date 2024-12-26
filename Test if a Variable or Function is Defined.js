// Inside tests/1_unit-tests.js

describe('Basic Assertions', function () {
  
    it('#2 should evaluate correctly', function () {
      assert.isDefined(variable1); // If variable1 is expected to be defined
      assert.isUndefined(variable2); // If variable2 is expected to be undefined
      assert.isDefined(variable3); // If variable3 is expected to be defined
    });
  
  });
  