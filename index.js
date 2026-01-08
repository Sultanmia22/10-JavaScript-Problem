// ** Problem 1: Reverse a String **
const reverseString = (str) => {
    const chars = str.split('')
    const reversed = chars.reverse().join('')
    return reversed
}

const result1 = reverseString('hello')
// console.log(result1)


// ** Problem 2: Count Vowels in a String **
const countVowels = (str) => {
    const chars = str.split('');
    let vowelCount = 0;
    const vowelList = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < chars.length; i++) {
        if (vowelList.includes(chars[i].toLowerCase())) {
            vowelCount++
        }
    }
    return vowelCount
}

const result2 = countVowels('programmingo');
// console.log(result2)


// ** Problem 3: Check for Palindrome **
const isPalindrome = (str) => {
    const original = str;
    const reversed = str.split('').reverse().join('');
    const isValid = original === reversed;
    return isValid
}

const result3 = isPalindrome('madam')
// console.log(result3);


// ** Problem 4: Find the Maximum Number **
const findMax = (arr) => {
    let maximum = [0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i]
        }
    }
    return maximum
};

const result4 = findMax([3, 5, 6, 9, 29]);
// console.log(result4)


// ** Problem 5: Remove Duplicates from an Array **
const removeDuplicates = (arr) => {
    const items = arr;
    let uniqueItems = [];
    for (let i = 0; i < items.length; i++) {
        if (!uniqueItems.includes(items[i])) {
            uniqueItems.push(items[i])
        }
    }
    return uniqueItems
}

const result5 = removeDuplicates([1, 2, 2, 3, 4, 4])
// console.log(result5)


// ** Problem 6: Sum of All Numbers in an Array **
const sumArray = (arr) => {
    const items = arr;
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        total = total + items[i];
    }
    return total;
};

const result6 = sumArray([1, 2, 3, 4]);
// console.log(result6)


// ** Problem 7: Find Even Numbers in an Array **
/*
Write a function that returns all even numbers from a given array.
Example:
Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]
*/

const findEvenNumbers = (arr) => {
    const items = arr;
    const evenNumbers = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] % 2 == 0) {
            evenNumbers.push(items[i])
        }
    }
    return evenNumbers
};

const result7 = findEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result7)


// ** Problem 8: Capitalize First Letter of Each Word **
const capitalizeWords = (str) => {
    const words = str.split(' ')
    const capitalizedWords = []
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const capitalized = word[0].toUpperCase() + word.slice(1)
        capitalizedWords.push(capitalized)
    }
    return capitalizedWords.join(' ')
};

const result8 = capitalizeWords('hello world');
// console.log(result8)


// ** Problem 9: Find the Factorial of a Number **
const calculateFactorial = (num) => {
    const number = num;
    let factorialResult = 1
    for (let i = 1; i <= number; i++) {
        factorialResult = factorialResult * i;
    }
    return factorialResult
};

const result9 = calculateFactorial(5)
// console.log(result9)


// ** Problem 10: PingPong Challenge **
const pingPongChallenge = (count) => {
    const output = []
    for (let i = 1; i <= count; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output.push("PingPong");
        }
        else if (i % 3 == 0) {
            output.push('Ping')
        }
        else if (i % 5 == 0) {
            output.push('Pong')
        }
        else {
            output.push(i)
        }
    }
    return output.join(',')
}

const result10 = pingPongChallenge(20)
console.log(result10)