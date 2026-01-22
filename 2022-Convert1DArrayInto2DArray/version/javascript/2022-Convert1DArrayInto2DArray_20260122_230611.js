// Last updated: 2026. 1. 22. 오후 11:06:11
1/**
2 * @param {number[]} original
3 * @param {number} m
4 * @param {number} n
5 * @return {number[][]}
6 */
7
8const construct2DArray = (original, m, n) => {
9    if (original.length !== m * n) return [];
10
11    const res = [];
12    
13    while (original.length >= n) {
14        res.push(original.slice(0, n));
15
16        original = original.slice(n);
17    }
18
19    return res;
20}
21