// Last updated: 2026. 1. 30. 오후 11:57:44
1const firstPalindrome = (words: string[]): string => 
2    words.find(word => word.split("").reverse().join("") === word) ?? "";