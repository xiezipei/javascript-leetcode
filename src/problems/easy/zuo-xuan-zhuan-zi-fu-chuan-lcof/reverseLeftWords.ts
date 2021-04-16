/**
 * 左旋转字符串
 * 
 * @problem
 * https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/
 * 
 * @tag
 * String
 * 
 * @param s 字符串
 * @param n 数字
 * @returns 字符串
 */
export function reverseLeftWords(s: string, n: number): string {
    return s.slice(n) + s.slice(0, n);  // 把字符串切割，然后重新拼接
}