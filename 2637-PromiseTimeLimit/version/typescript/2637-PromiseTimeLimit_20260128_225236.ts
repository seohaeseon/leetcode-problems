// Last updated: 2026. 1. 28. 오후 10:52:36
1type Fn = (...params: any[]) => Promise<any>;
2
3function timeLimit (fn: Fn, t: number): Fn {
4    return function(...params: any[]) {
5        return new Promise(async (resolve, reject) => {
6            setTimeout(() => {
7                reject("Time Limit Exceeded");
8            }, t);
9
10            try {
11                const res = await fn(...params);
12                resolve(res);
13            } catch(err) {
14                reject(err);
15            }
16        })
17    }
18};
19
20/**
21 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
22 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
23 */