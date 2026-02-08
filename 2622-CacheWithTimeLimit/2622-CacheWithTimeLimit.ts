// Last updated: 2026. 2. 8. 오후 11:48:18
1class TimeLimitedCache {
2    obj: {
3        [key: number]: {
4            value: number;
5            timeoutId: ReturnType<typeof setTimeout>;
6        }
7    }
8
9    constructor() {
10        this.obj = {};
11    }
12    
13    set(key: number, value: number, duration: number): boolean {
14
15        const alreadyExists = (this.obj[key]) ? true : false;
16        
17        if (alreadyExists) clearTimeout(this.obj[key].timeoutId);
18
19        this.obj[key] = {value, timeoutId: setTimeout(() => {
20
21            delete this.obj[key];
22        }, duration)};
23
24        return alreadyExists;
25    }
26    
27    get(key: number): number {
28        return this.obj[key]?.value ?? -1;
29    }
30    
31    count(): number {
32        return Object.keys(this.obj).length;
33    }
34}
35
36/**
37 * const timeLimitedCache = new TimeLimitedCache()
38 * timeLimitedCache.set(1, 42, 1000); // false
39 * timeLimitedCache.get(1) // 42
40 * timeLimitedCache.count() // 1
41 */