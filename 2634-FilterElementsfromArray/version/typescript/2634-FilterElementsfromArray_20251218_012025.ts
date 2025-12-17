// Last updated: 2025. 12. 18. 오전 1:20:25
1type Fn = (accum: number, curr: number) => number
2
3function reduce(nums: number[], fn: Fn, init: number): number {
4    if (!nums.length) return init;
5    
6    let val = init;
7    for (const idx in nums) {
8        val = fn(val, nums[idx]);
9    }
10
11    return val;
12};