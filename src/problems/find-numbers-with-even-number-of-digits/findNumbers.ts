export function findNumbers(nums: number[]): number {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        const str = nums[i].toString();
        if (str.length % 2 === 0) {
            count++;
        }
    }
    return count;
}