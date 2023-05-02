// initialization of array numbers
const numbers = [1, 2, 3, 4, 5];
const square = (x) => x ** 2;

// function for map
const mapArray = (numbers, square) => {
  return numbers.map((number) => {
    return square(number);
  });
};

// assigning the value of function into variable
const squared_numbers = mapArray(numbers, square);

// output
console.log(squared_numbers);

