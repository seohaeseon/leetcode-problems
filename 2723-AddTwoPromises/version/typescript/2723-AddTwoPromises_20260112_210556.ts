// Last updated: 2026. 1. 12. 오후 9:05:56
1type P = Promise<number>
2
3async function addTwoPromises(promise1: P, promise2: P): P {
4    return Promise.all([promise1, promise2]).then(([p1, p2]) => p1 + p2);
5}; 
6
7/**
8 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
9 *   .then(console.log); // 4
10 */