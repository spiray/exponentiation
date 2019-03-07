module.exports = function exponentiation(num, exp) {
    try {
        return num ** exp;
    } catch (err) {
        return Math.pow(num, exp);
    }
}