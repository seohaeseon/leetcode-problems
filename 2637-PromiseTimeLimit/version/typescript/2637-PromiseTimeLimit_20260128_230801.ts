// Last updated: 2026. 1. 28. 오후 11:08:01
1type Fn = (...params: any[]) => Promise<any>;
2
3function timeLimit (fn: Fn, t: number): Fn {
4    return function(...params: any[]) {
5        return Promise.race([
6            new Promise((resolve) => {
7                resolve(fn(...params));
8        }), new Promise((_, reject) => {
9                setTimeout(reject, t, "Time Limit Exceeded");
10            })
11        ]);
12    }
13};
14
15/**
16 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
17 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
18 */