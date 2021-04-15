/**
 * 统计位数为偶数的数字
 * 
 * @problem
 * https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits/
 * 
 * @param nums 数字数组
 * @returns 数字
 */
export function findNumbers(nums: number[]): number {
    let count = 0;  // 定义一个计数器变量
    for (let i = 0; i < nums.length; i++) { // 遍历数组，每次得到元素i
        const str = nums[i].toString(); // 把元素i转为字符串s
        if (str.length % 2 === 0) { // 根据字符串s的长度判断是否为偶数位
            count++;    // 元素为偶数位则计数器加一
        }
    }
    return count;
}
