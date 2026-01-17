// Last updated: 2026. 1. 17. 오후 11:34:57
1class Calculator {
2    #value;
3    
4    constructor(value: number) {
5        this.#value = value;
6    }
7    
8    add(value: number): Calculator {
9        this.#value += value;
10        return this;
11    }
12    
13    subtract(value: number): Calculator {
14        this.#value -= value;
15        return this;
16    }
17    
18    multiply(value: number): Calculator {
19        this.#value *= value;
20        return this;
21    }
22    
23    divide(value: number): Calculator {
24        if (value === 0) {
25            throw new Error("Division by zero is not allowed");
26        }
27        this.#value /= value;
28        return this;
29    }
30    
31    power(value: number): Calculator {
32        this.#value **= value;
33        return this;
34    }
35    
36    getResult(): number {
37        return this.#value;
38    }
39}