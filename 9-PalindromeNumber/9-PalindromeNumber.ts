// Last updated: 2026. 2. 3. 오전 12:49:50
1const isPalindrome = (num: number): boolean => {
2    if (num < 0) return false;
3
4    const reverseNumber = (remaining: number, reversed: number = 0) => {
5        if (remaining < 10) {
6            return reversed + remaining;
7        };
8
9        const lastDigit = remaining % 10;
10        return reverseNumber((remaining - lastDigit) / 10, (reversed + lastDigit) * 10);
11    }
12
13    return num === reverseNumber(num) ? true : false;
14}