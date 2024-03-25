// String Manipulation Functions:
// Reverse a String: Write a function that reverses a given string.

const name = "Hello World";
const reverseString = (str) => {
  return str.split("").reverse().join("");
}
console.log(reverseString(name));


// Count Characters: Create a function that counts the number of characters in a string.
const countCharacters = (str) => {
  return str.length;
}
console.log(countCharacters(name));



// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
const sentence = "hello world";
const capitalizeWords = (str) => {
  return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

console.log(capitalizeWords(sentence));



// Array Functions:
// Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
findMax = (arr) => {
    return Math.max(...arr);
}

console.log(findMax(numbers));
(
    findMin = (arr) => {
        return Math.min(...arr);
    }
)
console.log(findMin(numbers));



// Sum of Array: Create a function that calculates the sum of all elements in an array.
const sumArray = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumArray(numbers));



// Filter Array: Implement a function that filters out elements from an array based on a given condition.
const filterArray = (arr, condition) => {
  return arr.filter(condition);
}

console.log(filterArray(numbers, (num) => num % 2 === 0));




// Mathematical Functions:
// Factorial: Write a function to calculate the factorial of a given number.
const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(5));


// Prime Number Check: Create a function to check if a number is prime or not.
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));



// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
const fibonacci = (num) => {
  let fib = [0, 1];
  for (let i = 2; i < num; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

console.log(fibonacci(10));
