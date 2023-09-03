//1. print odd numbers in an array:
(function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const oddNumbers = numbers.filter(function(num) {
      return num % 2 !== 0;
    });
    console.log(oddNumbers);
  })();

//2. convert all the strings to title caps in a string array:
(function() {
    const stringArray = ["hello", "world", "javascript"];
    const titleCapsArray = stringArray.map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    });
    console.log(titleCapsArray);
  })();

//3. sum of all numbers in an array:
(function() {
    const numbers = [1, 2, 3, 4, 5];
    const sum = numbers.reduce(function(acc, current) {
      return acc + current;
    }, 0);
    console.log(sum);
  })();

//4. return all the prime n umbers in an array:
(function() {
    const numbers = [2, 3, 5, 7, 8, 11, 13];
    
    function isPrime(num) {
      if (num <= 1) return false;
      if (num <= 3) return true;
      
      if (num % 2 === 0 || num % 3 === 0) return false;
      
      for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
      }
      
      return true;
    }
    
    const primeNumbers = numbers.filter(function(num) {
      return isPrime(num);
    });
    
    console.log(primeNumbers);
  })();

//5. retun all the palindromes in an array:
(function() {
    const words = ["racecar", "hello", "level", "world", "deified"];
    
    function isPalindrome(str) {
      return str === str.split('').reverse().join('');
    }
    
    const palindromes = words.filter(function(word) {
      return isPalindrome(word);
    });
    
    console.log(palindromes);
  })();

//6. return media of two sorted arrays of the same size
(function() {
    const arr1 = [1, 3, 5];
    const arr2 = [2, 4, 6];
    const combined = arr1.concat(arr2).sort((a, b) => a - b);
    
    const medianIndex = Math.floor(combined.length / 2);
    let median;
    
    if (combined.length % 2 === 0) {
      median = (combined[medianIndex - 1] + combined[medianIndex]) / 2;
    } else {
      median = combined[medianIndex];
    }
    
    console.log(median);
  })();

//7.remove duplicates from an array:
(function() {
    const array = [1, 2, 2, 3, 4, 4, 5];
    const uniqueArray = Array.from(new Set(array));
    console.log(uniqueArray);
  })();

//8.rotate an array by k times:
(function() {
    const array = [1, 2, 3, 4, 5];
    const k = 2;
    
    for (let i = 0; i < k; i++) {
      const element = array.shift();
      array.push(element);
    }
    
    console.log(array);
  })();

  

//do the following programs in arrow functions:
//1.print odd numbers in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log(oddNumbers);

//2. convert all the strings to tit;le caps in a string array:
const stringArray = ["hello", "world", "javascript"];
const titleCapsArray = stringArray.map(str => str.charAt(0).toUpperCase() + str.slice(1));
console.log(titleCapsArray);

//3. sum of all numbers in an array:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum);

//4. returnall the prime numbers in an array:
const numbers = [2, 3, 5, 7, 8, 11, 13];

const isPrime = num => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
};

const primeNumbers = numbers.filter(num => isPrime(num));
console.log(primeNumbers);

//5. return all the palindromes in an array
const words = ["racecar", "hello", "level", "world", "deified"];

const isPalindrome = str => str === str.split('').reverse().join('');

const palindromes = words.filter(word => isPalindrome(word));
console.log(palindromes);

  