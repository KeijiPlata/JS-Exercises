// initialize the array of numbers
const numbers = [1, 2, 3, 4, 5];

// using .map method
const SquareOfNumbers = numbers.map((number) => {
  return number * number;
});

// using .filter method filter all even numbers
const EvenNumbers = SquareOfNumbers.filter((number) => {
  return number % 2 === 0;
});

// using .reduce method, add all of the number in array
const SumOfNumbers = SquareOfNumbers.reduce((sum, number) => {
  return sum + number;
});

// output
console.log(`Original array: ${numbers}`);
console.log(`Squared array: ${SquareOfNumbers}`);
console.log(`Even Numbers: ${EvenNumbers}`);
console.log(`Sum off Squared numbers: ${SumOfNumbers}`);
