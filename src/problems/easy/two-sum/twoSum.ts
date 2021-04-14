/**
 * 两数之和
 * 
 * @problem
 * https://leetcode-cn.com/problems/two-sum/
 * 
 * @param nums 数字数组
 * @param target 目标数字
 * @return 目标数组
 */
export const twoSum = function(nums: [], target: number): number[] {
    for (var i = 0; i < nums.length; i++) { // 遍历数组，每次得到元素i时
        for (var j = 0; j < nums.length; j++) { // 同时再遍历一遍数组，每次得到元素
            if (i !== j && nums[i] + nums[j] === target) {  // 判断元素i和j是否符合要求
                return [i, j];  // 返回目标数组
            }
        }
    }
    return [];  // 没符合要求返回空数组
}
