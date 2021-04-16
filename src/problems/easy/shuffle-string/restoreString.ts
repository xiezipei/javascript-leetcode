/**
 * 重新排列字符串
 * 
 * @problem
 * https://leetcode-cn.com/problems/shuffle-string/
 * 
 * @tag
 * String, Array
 * 
 * @param s 字符串
 * @param indices 整数数组
 * @returns 字符串
 */
export function restoreString(s: string, indices: number[]): string {
    let result = new Array(s.length);   // new一个长度为s.length的空数组
    for (let i = 0; i < result.length; i++) {   // 遍历空数组
        result[i] = s[indices.indexOf(i)];  // 根据给出索引把特定字符放入空数组
    }
    return result.join(''); // 最后将目标数组转为字符串
}