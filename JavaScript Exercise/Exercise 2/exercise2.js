// function for adding the squared numbers
const SumOfSquares = (start, end) => {
  let total = 0;
  for (let i = start; i <= end; i++) {
    total += i * i;
  }
  return total;
};

// initializing variables needed
const start = 1;
const end = 5;

// output
console.log(
  `The sum of squares from ${start} to ${end} is ${SumOfSquares(start, end)}`
);
