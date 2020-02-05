const assert = require('assert');
const add = require('../src/add');
describe('Array', function () {
    describe('#indexOf()', function () {
        it('1 + 2 = 3', function () {
            assert.equal(add(1, 2), 3);
        });
        it('4 + 8 = 12', function () {
            assert.equal(add(4, 8), 12);
        });
    });
});
