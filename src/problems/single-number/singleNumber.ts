function singleNumber(nums: number[]): number {
    let target: number = 0;
    nums.map(item => {
        let count = 0;
        for (let i = 0; i < nums.length; i++) {
            if (item === nums[i]) {
                count++;
            }
        }
        if (count === 1) {
            target = item;
        }
    });
    return target;
};