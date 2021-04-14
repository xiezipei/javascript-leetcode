export function isPalindrome(x: number): boolean {
    return x.toString() === x.toString().split('').reverse().join('');
}