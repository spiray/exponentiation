module.exports = function exponentiation(num, exp) {
    const base = parseInt(num, 10);
    const exponent = parseInt(exp, 10);
    if (!Number.isInteger(base) || !Number.isInteger(exponent)) throw new Error('Both arguments must be numbers.')
    try {
        return base ** exponent;
    } catch (_) {
        try {
            return Math.pow(base, exponent);
        } catch (err) {
            throw new Error(err);
        }
    }
}