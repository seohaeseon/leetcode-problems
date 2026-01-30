// Last updated: 2026. 1. 30. 오후 11:59:05
const firstPalindrome = (words: string[]): string => 
    words.find(word => word.split("").reverse().join("") === word) ?? "";