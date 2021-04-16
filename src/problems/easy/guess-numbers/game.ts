/**
 * 猜数字
 * 
 * @problem
 * https://leetcode-cn.com/problems/guess-numbers/
 * 
 * @tag
 * Array
 * 
 * @param guess 数字数组
 * @param answer 数字数组
 * @returns 数字
 */
export function game(guess: number[], answer: number[]): number {
    let result = 0;
    for (let i = 0; i < 3; i++) {
        if (guess[i] === answer[i]) {
            result++;
        }
    }
    return result;
}