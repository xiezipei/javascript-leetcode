/**
 * 回文数
 * 
 * @problem
 * https://leetcode-cn.com/problems/palindrome-number/
 * 
 * @tag
 * String
 * 
 * @param x 数字
 * @returns 布尔值
 */
export function isPalindrome(x: number): boolean {
    /**
     * 思路：
     * 1. 数字转成字符串
     * 2. 字符串转成数组
     * 3. 数组反转后转成字符串
     * 4. 将结果字符串跟原来的转成字符串的数字对比得出结果
     */
    return x.toString() === x.toString().split('').reverse().join('');
}