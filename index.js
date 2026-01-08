// **  Problem 1: Reverse a String **

const reverse = (value) => {

    const splitValue = value.split('')

    const reverseValue = splitValue.reverse().join('')

    return reverseValue
}

const result1 = reverse('hello')

//  console.log(result1)





// ** Problem 2: Count Vowels in a String **

const vowelsCount = (value) => {

    const splitValue = value.split('');

    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < splitValue.length; i++) {
        if (vowels.includes(splitValue[i].toLowerCase())) {
            count++
        }
    }

    return count
}

const result2 = vowelsCount('programmingo');

// console.log(result2)



//  ** Problem 3: Check for Palindrome ** 

const palindrome = (value) => {

    const inputValue = value;

    const splitValue = value.split('').reverse().join('');

    const checkPalindrome = inputValue === splitValue;

    return checkPalindrome

}

const result3 = palindrome('madam')

// console.log(result3);


// ** Problem 4: Find the Maximum Number **

const maxNumber = (value) => {
    
    let max = [0];

    for(let i = 0; i<value.length;i++){
        if(value[i] > max){
            max = value[i]
        }
    }

    return max

};

const result4 = maxNumber([3,5,6,9,29]);

// console.log(result4)


// ** Problem 5: Remove Duplicates from an Array **

const duplicateNum = (value) => {
    
    const num = value;

    let removeDuplicate = [];

    for(let i = 0; i < num.length ; i++){
        if(!removeDuplicate.includes(num[i])){
           removeDuplicate.push(num[i])
        }
    }

    return removeDuplicate
}

const result5 = duplicateNum([1, 2, 2, 3, 4, 4])

// console.log(result5)


// ** Problem 6: Sum of All Numbers in an Array **


const sumNum = (value) => {
    
    const num = value;
    
    let sum = 0;

    for(let i = 0; i < num.length; i++){

        sum = sum + num[i];

    }

    return sum;

};

const result6 = sumNum([1, 2, 3, 4]);

// console.log(result6)


// ** Problem 7: Find Even Numbers in an Array **
/* 
Write a function that returns all even numbers from a given array.

Example:

Input: [1, 2, 3, 4, 5, 6]
Output: [2, 4, 6]

*/


const evenNumber = (value) => {

    const num = value;

    const evenNum = [];

    for(let i = 0; i < num.length ; i++){

        if(num[i] % 2 == 0){

            evenNum.push(num[i])

        }
    }

    return evenNum

};

const result7 = evenNumber([1, 2, 3, 4, 5, 6]);

// console.log(result7)


// ** Problem 8: Capitalize First Letter of Each Word **

const upperCase = (value) => {
    
    const strings = value.split(' ')

    const upperValue = []

    for(let i = 0 ; i < strings.length; i++){

        const world = strings[i]

        const capitalizes = world[0].toUpperCase() + world.slice(1)

        upperValue.push(capitalizes)
        
    }

    return upperValue.join(' ')

};

const result8 = upperCase('hello world');

// console.log(result8)


// ** roblem 9: Find the Factorial of a Number **

const factorial = (value) => {

    const num = value;

    let result = 1

    for(let i = 1; i <= num ; i++){

        result = result * i;

    }

    return result

};

const result9 = factorial(5)

// console.log(result9)


// ** Problem 10: PingPong Challenge **

const pingPong = (value) => {

   const result = []
   
    for(let i = 1 ; i <= value ; i++){

        if (i % 3 === 0 && i % 5 === 0) {
             result.push("PingPong");
        }
           

        else if(i % 3 == 0){
            result.push('Ping')
        }

        else if(i % 5 == 0){
            result.push('Pong')
        }

        else{
            result.push(i)
        }

    }

    return result.join(',')

}

const result10 = pingPong(20)

// console.log(result10)