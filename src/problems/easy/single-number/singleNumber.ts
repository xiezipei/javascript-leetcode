/**
 * 只出现一次的数字
 * 
 * @problem
 * https://leetcode-cn.com/problems/single-number/
 * 
 * @tag
 * Array
 * 
 * @param nums 
 * @returns 
 */
export function singleNumber(nums: number[]): number {
    let target = 0; // 目标变量
    nums.forEach(item => {  // 遍历数组，得到元素item
        let count = 0;
        for (let i = 0; i < nums.length; i++) { // 再遍历数组，得到元素nums[i]
            if (item === nums[i]) { // 找出跟item等值的元素
                count++;
            }
        }
        if (count === 1) {  // 把只出现一次的赋值给目标变量
            target = item;
        }
    });
    return target;
}