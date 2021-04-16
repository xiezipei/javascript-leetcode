/**
 * 字符串中的第一个唯一字符
 * 
 * @problem
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * 
 * @tag
 * String, indexOf, lastIndexOf
 * 
 * @param s 字符串
 * @returns 数字
 */
export function firstUniqChar(s: string): number {
    for (let i = 0; i < s.length; i++) {    // 根据字符串长度进行遍历，得到字符 `s[i]`
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {  // 如果s[i]在s中的第一个索引和最后一个索引一致，说明唯一且第一个
            return i;
        }
    }
    return -1;
}