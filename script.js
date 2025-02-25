// Part 1: Math Problems -------------------------------------
    // started code
    // The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


// Check if all numbers are divisible by 5. Cache the result in a variable. -------------------------------------
const dividebtfive = n1 % 5 ===0 && n2 % 5 ===0 && n3 % 5 ===0 && n4 % 5 ===0;
console.log(dividebtfive)

// Check if the first number is larger than the last. Cache the result in a variable.
const firstHigherLast = n1 > n4;

console.log(firstHigherLast)

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
const subFirSec = n1 - n4;
console.log(subFirSec)

// Multiply the result by the third number.
const resultTime = subFirSec * n3;
console.log(resultTime)

// Find the remainder of dividing the result by the fourth number.
const remainder = resultTime % n4;
console.log(remainder)

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
// const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isUnder25)

const nowValid = isSum50 && isTwoOdd && isUnder25 && isUnique && dividebtfive && firstHigherLast;
console.log(nowValid)


// Part 2: Practical Math --------------------------------------------------------------------------------------
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.

// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?


// Will your budget be enough to cover the fuel expense?


// How long will the trip take, in hours?


// Part 3: Future Exploration ----------------------------------------------------------------------------------