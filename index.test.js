const exponentiation = require('./index');

describe('exponentiation', () => {
    it('should return the power of a base and exponent', done => {
        expect(exponentiation(6, 6)).toEqual(46656);
        done();
    })

    it('should throw if you pass a non-number string', done => {
        expect(() => exponentiation('a', 'b')).toThrow('Both arguments must be numbers.');
        done();
    })
})