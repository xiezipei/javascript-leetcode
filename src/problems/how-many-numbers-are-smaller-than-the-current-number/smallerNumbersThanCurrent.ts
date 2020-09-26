export function smallerNumbersThanCurrent(nums: number[]): number[] {
    return nums.map((item) => {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] < item) {
                count++
            }
        }
        return count;
    })
}