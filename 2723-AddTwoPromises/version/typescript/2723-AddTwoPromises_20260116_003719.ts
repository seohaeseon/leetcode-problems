// Last updated: 2026. 1. 16. 오전 12:37:19
1type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
2type Fn = (...args: JSONValue[]) => void
3
4function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
5    fn(...args);
6
7    const intervalId = setInterval(fn, t, ...args);
8    
9    return () => {
10        clearInterval(intervalId);
11    };
12};
13
14/**
15 *  const result = [];
16 *
17 *  const fn = (x) => x * 2;
18 *  const args = [4], t = 35, cancelTimeMs = 190;
19 *
20 *  const start = performance.now();
21 *
22 *  const log = (...argsArr) => {
23 *      const diff = Math.floor(performance.now() - start);
24 *      result.push({"time": diff, "returned": fn(...argsArr)});
25 *  }
26 *       
27 *  const cancel = cancellable(log, args, t);
28 *
29 *  setTimeout(cancel, cancelTimeMs);
30 *   
31 *  setTimeout(() => {
32 *      console.log(result); // [
33 *                           //     {"time":0,"returned":8},
34 *                           //     {"time":35,"returned":8},
35 *                           //     {"time":70,"returned":8},
36 *                           //     {"time":105,"returned":8},
37 *                           //     {"time":140,"returned":8},
38 *                           //     {"time":175,"returned":8}
39 *                           // ]
40 *  }, cancelTimeMs + t + 15)    
41 */