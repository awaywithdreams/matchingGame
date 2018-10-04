// Require the built in 'assertion' library
var assert = require('assert');
// Create a group of tests about Arrays
describe('Array', function() {
  // Within our Array group, Create a group of tests for indexOf
  describe('#indexOf()', function() {
    // A string explanation of what we're testing
    it('should return -1 when the value is not present', function(){
      // Our actual test: -1 should equal indexOf(...)
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

var assert = require('assert');
  describe('Math', function (){
    it('should test if 3*3 = 9', function(){
      assert.equal(9, 3*3);
    })
  });

  var assert = require('assert');
    describe('easyCards', function () {
      it('should have an indexOf -1', function (){
        assert.equal(-1, ['A', 'B', 'C', 'D'].indexOf(3))
      })
    });

    var assert = require('assert');
      describe('hardCards', function () {
        it('should have an indexOf -1', function () {
          assert.equal(-1, (memoryController.hardShuffle.hardCards).indexOf(15))
        })
      })