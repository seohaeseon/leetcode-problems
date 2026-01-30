// Last updated: 2026. 1. 30. 오후 11:58:56
class ArrayWrapper {
    obj: number[];

    constructor(nums: number[]) {
        this.obj = nums;
    }
    
    valueOf(): number {
        return this.obj.reduce((acc, curr) => acc + curr, 0);
    }
    
    toString(): string {
        return JSON.stringify(this.obj);
    }
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */