const isPalindrome = (num: number): boolean => {
    if (num < 0) return false;

    const reverseNumber = (remaining: number, reversed: number = 0) => {
        if (remaining < 10) {
            return reversed + remaining;
        };

        const lastDigit = remaining % 10;
        return reverseNumber((remaining - lastDigit) / 10, (reversed + lastDigit) * 10);
    }

    return num === reverseNumber(num) ? true : false;
}