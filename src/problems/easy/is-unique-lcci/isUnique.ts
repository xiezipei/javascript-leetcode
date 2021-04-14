/**
 * 判定字符是否唯一
 * 
 * @problem
 * https://leetcode-cn.com/problems/is-unique-lcci/
 * 
 * @param astr 字符串
 * @returns 布尔值
 */
export function isUnique(astr: string): boolean {
    const astrArr = astr.split('');
    const astrArrNoRepeat = [...new Set(astrArr)];
    return astrArr.length === astrArrNoRepeat.length
}
