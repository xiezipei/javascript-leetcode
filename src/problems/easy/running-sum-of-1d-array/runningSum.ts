/**
 * 一维数组的动态和
 * 
 * @problem
 * https://leetcode-cn.com/problems/running-sum-of-1d-array/
 * 
 * @tag
 * Array
 * 
 * @param nums 数字数组
 * @returns 数字数组
 */
export function runningSum(nums: number[]): number[] {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i - 1] + nums[i];    // 关键点，明白了`nums[i - 1]`已经是前面数字相加就简单了
    }
    return nums;
}
