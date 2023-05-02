// initialize the array of numbers
const array = [10, 5, -3, 0, 2, 3];

// get the length of an array
const len = array.length;

// get the average using the function
const calculateAverage = (array, len) => {
    // adding all of numbers in array
    const SumOfNumbers = array.reduce((sum, currentValue) => {
        return sum + currentValue;
    });

    // getting the average
    const average = Math.floor(SumOfNumbers / len)
    return average
}

// output
console.log(`Output: ${calculateAverage(array, len)}`)