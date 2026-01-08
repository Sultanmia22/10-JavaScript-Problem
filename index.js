// ** Problem 1: Reverse a String **

const reverseString = (inputStr) => {
    const characters = inputStr.split('');
    const reversedCharacters = characters.reverse().join('');
    return reversedCharacters;
}

const reversedResult = reverseString('hello');
// console.log(reversedResult);


// ** Problem 2: Count Vowels in a String **

const countVowels = (inputString) => {
    const characters = inputString.split('');
    let vowelCount = 0;
    const vowelList = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < characters.length; i++) {
        if (vowelList.includes(characters[i].toLowerCase())) {
            vowelCount++;
        }
    }

    return vowelCount;
}

const totalVowels = countVowels('programmingo');
// console.log(totalVowels);


// ** Problem 3: Check for Palindrome ** const isPalindrome = (text) => {
    const originalText = text;
    const reversedText = text.split('').reverse().join('');
    const isMatch = originalText === reversedText;

    return isMatch;
}

const palindromeCheck = isPalindrome('madam');
// console.log(palindromeCheck);


// ** Problem 4: Find the Maximum Number **

const findMaxNumber = (numbersArray) => {
    let maxVal = [0]; // Kept as [0] to match your original logic

    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > maxVal) {
            maxVal = numbersArray[i];
        }
    }

    return maxVal;
};

const maxNumResult = findMaxNumber([3, 5, 6, 9, 29]);
// console.log(maxNumResult);


// ** Problem 5: Remove Duplicates from an Array **

const removeDuplicates = (inputArray) => {
    const numbers = inputArray;
    let uniqueItems = [];

    for (let i = 0; i < numbers.length; i++) {
        if (!uniqueItems.includes(numbers[i])) {
            uniqueItems.push(numbers[i]);
        }
    }

    return uniqueItems;
}

const cleanArray = removeDuplicates([1, 2, 2, 3, 4, 4]);
// console.log(cleanArray);


// ** Problem 6: Sum of All Numbers in an Array **

const calculateSum = (numbers) => {
    const numsArray = numbers;
    let totalSum = 0;

    for (let i = 0; i < numsArray.length; i++) {
        totalSum = totalSum + numsArray[i];
    }

    return totalSum;
};

const sumResult = calculateSum([1, 2, 3, 4]);
// console.log(sumResult);


// ** Problem 7: Find Even Numbers in an Array **

const getEvenNumbers = (numbersList) => {
    const inputNumbers = numbersList;
    const evenNumbersArray = [];

    for (let i = 0; i < inputNumbers.length; i++) {
        if (inputNumbers[i] % 2 == 0) {
            evenNumbersArray.push(inputNumbers[i]);
        }
    }

    return evenNumbersArray;
};

const evenResult = getEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(evenResult);


// ** Problem 8: Capitalize First Letter of Each Word **

const capitalizeWords = (sentence) => {
    const words = sentence.split(' ');
    const capitalizedList = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const formattedWord = word[0].toUpperCase() + word.slice(1);
        capitalizedList.push(formattedWord);
    }

    return capitalizedList.join(' ');
};

const upperCaseResult = capitalizeWords('hello world');
// console.log(upperCaseResult);


// ** Problem 9: Find the Factorial of a Number **

const calculateFactorial = (n) => {
    const targetNum = n;
    let factorialResult = 1;

    for (let i = 1; i <= targetNum; i++) {
        factorialResult = factorialResult * i;
    }

    return factorialResult;
};

const factResult = calculateFactorial(5);
// console.log(factResult);


// ** Problem 10: PingPong Challenge **

const runPingPong = (limit) => {
    const pingPongResults = [];

    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            pingPongResults.push("PingPong");
        } 
        else if (i % 3 == 0) {
            pingPongResults.push('Ping');
        } 
        else if (i % 5 == 0) {
            pingPongResults.push('Pong');
        } 
        else {
            pingPongResults.push(i);
        }
    }

    return pingPongResults.join(',');
}

const finalPingPongResult = runPingPong(20);
// console.log(finalPingPongResult);