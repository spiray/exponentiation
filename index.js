module.exports = function exponentiation(num, exp) {
    const base = parseInt(num);
    const exponent = parseInt(exp);
    if (!Number.isInteger(base) || !Number.isInteger(exponent)) throw new Error('Both arguments must be numbers.')
    try {
        return base ** exponent;
    } catch (_) {
        try {
            return Math.pow(base, exponent);
        } catch (err) {
            console.error(error);
        }
    }
}