// Last updated: 2026. 2. 3. 오전 12:29:11
1const isPalindrome = (x: number): boolean => {
2    if (x < 0) return false;
3
4    const findReversedValue = (remained: number, reversed: number = 0) => {
5        if (remained < 10) {
6            return reversed + remained;
7        };
8
9        const onesDigit = remained % 10;
10        return findReversedValue((remained - onesDigit) / 10, (reversed + onesDigit) * 10);
11    }
12
13    return x === findReversedValue(x) ? true : false;
14}