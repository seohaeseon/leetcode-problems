// Last updated: 2026. 1. 23. 오후 11:59:32
1/**
2 * @param {number[]} original
3 * @param {number} m
4 * @param {number} n
5 * @return {number[][]}
6 */
7
8const construct2DArray = (original, m, n) => {
9  if (original.length !== m * n) return [];
10
11  const res = Array.from({ length: m }, () => Array(n));
12  let idx = 0;
13
14  for (let i = 0; i < m; i++) {
15    for (let j = 0; j < n; j++) {
16      res[i][j] = original[idx++];
17    }
18  }
19
20  return res;
21};