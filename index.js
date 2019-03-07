module.exports = function exponentiation(num, exp) {
    const base = Number(num);
    const exponent = Number(exp);
    if (typeof base !== 'number' || typeof exponent !== 'number') throw new Error('Both arguments must be numbers.')
    try {
        return base ** exponent;
    } catch (err) {
        try {
            return Math.pow(base, exponent);
        } catch (error) {
            console.error(error);
        }
    }
}