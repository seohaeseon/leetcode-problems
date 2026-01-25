// Last updated: 2026. 1. 26. 오전 12:00:08
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */

const construct2DArray = (original, m, n) => {
  if (original.length !== m * n) return [];

  const res = Array.from({ length: m }, () => Array(n));
  let idx = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[i][j] = original[idx++];
    }
  }

  return res;
};