/**
 * Created by logov on 07-Apr-17.
 */

let {describe} = require('mocha');
let assert = require('assert');

describe('MyTests', function () {
    this.timeout(500);

    describe('MyFirstTest', function () {
        it('1 == 1', function () {
            assert.equal(1, 1);
        });

        it('timeouts', function (done) {
            setTimeout(done, 700);
        });

        it('refuses', function () {
            return false
        });

        it('throws exceptions', function () {
            throw 'nope'
        });

    });
});
