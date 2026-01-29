// Last updated: 2026. 1. 29. 오후 11:58:21
1class ArrayWrapper {
2    obj: number[];
3
4    constructor(nums: number[]) {
5        this.obj = nums;
6    }
7    
8    valueOf(): number {
9        return this.obj.reduce((acc, curr) => acc + curr, 0);
10    }
11    
12    toString(): string {
13        return JSON.stringify(this.obj);
14    }
15};
16
17/**
18 * const obj1 = new ArrayWrapper([1,2]);
19 * const obj2 = new ArrayWrapper([3,4]);
20 * obj1 + obj2; // 10
21 * String(obj1); // "[1,2]"
22 * String(obj2); // "[3,4]"
23 */