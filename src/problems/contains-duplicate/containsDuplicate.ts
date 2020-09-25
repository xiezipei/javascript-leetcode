function containsDuplicate(nums: number[]): boolean {
    let result = false;
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if (nums.filter(j => j === item).length > 1) {
            result = true;
        }
    }
    return result;
};