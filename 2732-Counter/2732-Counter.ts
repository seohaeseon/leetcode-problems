// Last updated: 2025. 12. 18. 오전 12:05:28
function createCounter(n: number): () => number {
    
    return function() {
        return n++;
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */