// Last updated: 2026. 1. 21. 오후 11:58:07
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number[]}
5 */
6
7const twoSum = (nums, target) => {
8
9    for (let i = 0; i < nums.length; i += 1) {
10        for (let j = i + 1; j < nums.length; j += 1) {
11            if ((nums[i] + nums[j]) === target) 
12                return [i, j];
13        }
14    }
15};
16