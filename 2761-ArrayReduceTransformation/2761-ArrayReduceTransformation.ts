// Last updated: 2025. 12. 19. 오후 8:36:04
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    if (!nums.length) return init;
    
    let val = init;
    for (const idx in nums) {
        val = fn(val, nums[idx]);
    }

    return val;
};