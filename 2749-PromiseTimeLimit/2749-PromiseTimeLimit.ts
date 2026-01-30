// Last updated: 2026. 1. 30. 오후 11:59:00
type Fn = (...params: any[]) => Promise<any>;

function timeLimit (fn: Fn, t: number): Fn {
    return function(...params: any[]) {
        return Promise.race([
            new Promise((resolve) => {
                resolve(fn(...params));
        }), new Promise((_, reject) => {
                setTimeout(reject, t, "Time Limit Exceeded");
            })
        ]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */