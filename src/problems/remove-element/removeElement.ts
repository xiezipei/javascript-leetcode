function removeElement(nums: number[], val: number): number {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    return nums.length;
};