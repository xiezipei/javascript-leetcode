export const plusOne = function(digits: any[]) {
    let num = BigInt(digits.join(''));
    let str = String(num + 1n);
    let arr = str.split('');
    return arr.map(str => Number(str));
}