/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let num = BigInt(digits.join(''));
    let str = String(num + 1n);
    let arr = str.split('');
    return arr.map(str => Number(str));
};