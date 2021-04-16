/**
 * 存在重复元素
 * 
 * @problem
 * https://leetcode-cn.com/problems/contains-duplicate/
 * 
 * @tag
 * Array, filter
 * 
 * @param nums 数字数组
 * @returns 布尔值
 */
export function containsDuplicate(nums: number[]): boolean {
    let result = false;
    for (let i = 0; i < nums.length; i++) {
        if (nums.filter(j => j === nums[i]).length > 1) {
            result = true;
        }
    }
    return result;
}
