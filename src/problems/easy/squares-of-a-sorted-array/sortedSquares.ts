/**
 * 有序数组的平方
 * 
 * @problem
 * https://leetcode-cn.com/problems/squares-of-a-sorted-array/
 * 
 * @tag
 * Array, map
 * 
 * @param A 非递减顺序排序的整数数组
 * @returns 每个数字的平方组成新数组（按非递减顺序排序）
 */
export const sortedSquares = function (A: number[]): number[] {
    return A.map(item => item * item).sort((a, b) => a - b);    // 先算出平方数，然后排序
}
