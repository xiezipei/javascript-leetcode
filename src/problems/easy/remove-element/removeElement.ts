/**
 * 移除元素
 * 
 * @problem
 * https://leetcode-cn.com/problems/remove-element/
 * 
 * @tag
 * Array, splice
 * 
 * @param nums 
 * @param val 
 * @returns 
 */
export function removeElement(nums: number[], val: number): number {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
}