const Tabs = require('../src/tabs');
const assert = require('assert');

describe('Tabs', function() {
    describe('#Tabs()', function() {
      it('should return an object', function() {
        assert.equal(new Tabs, 'object');
      });
    });
  });