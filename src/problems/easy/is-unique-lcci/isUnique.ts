/**
 * 判定字符是否唯一
 * 
 * @problem
 * https://leetcode-cn.com/problems/is-unique-lcci/
 * 
 * @tag
 * Array, set
 * 
 * @param str 字符串
 * @returns 布尔值
 */
export function isUnique(str: string): boolean {
    const strArr = str.split('');   // 字符串转为数组
    const strArrNoRepeat = [...new Set(strArr)]; // 数组去重（转为set再转为数组）得到新数组
    return strArr.length === strArrNoRepeat.length; // 对比数组与去重后的数组得到结果
}
