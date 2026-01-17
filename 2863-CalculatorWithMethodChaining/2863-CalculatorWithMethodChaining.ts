// Last updated: 2026. 1. 17. 오후 11:35:07
class Calculator {
    #value;
    
    constructor(value: number) {
        this.#value = value;
    }
    
    add(value: number): Calculator {
        this.#value += value;
        return this;
    }
    
    subtract(value: number): Calculator {
        this.#value -= value;
        return this;
    }
    
    multiply(value: number): Calculator {
        this.#value *= value;
        return this;
    }
    
    divide(value: number): Calculator {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.#value /= value;
        return this;
    }
    
    power(value: number): Calculator {
        this.#value **= value;
        return this;
    }
    
    getResult(): number {
        return this.#value;
    }
}