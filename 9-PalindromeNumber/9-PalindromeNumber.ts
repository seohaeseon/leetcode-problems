// Last updated: 2026. 2. 1. 오전 12:39:00
1const isPalindrome = (x: number): boolean => {
2    if (x < 0) return false;
3
4    const placeValues = [];
5
6    const findPlaceValues = (x: number) => {
7        const unitsDigit = x % 10;
8        if (x < 10) {
9            placeValues.push(x);
10            return;
11        };
12        placeValues.push(unitsDigit);
13        findPlaceValues((x - unitsDigit) / 10);
14    }
15
16    findPlaceValues(x);
17
18    for (let i = 0; i < placeValues.length / 2; i += 1) {
19        if (placeValues[i] !== placeValues[placeValues.length - i - 1]) return false;
20    }
21
22    return true;
23}