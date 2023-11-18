// Write a function that takes an array of numbers as an argument and returns a new array with only the even numbers.


// First way of doing this exercise is by using a filter 
const theArray = [1, 2, 3, 4, 5, 6];

function evenNumbers(myArray) {
  return myArray.filter((numbers) => {
    return numbers % 2 === 0;
  });
}

const result = evenNumbers(theArray);

console.log(result);


// second way of doing this is by using a for loop
const anotherEven = (myArray) => {
  const result = [];

  for (i = 0; i < myArray.length; i++) {
    if (myArray[i] % 2 === 0) {
      result.push(myArray[i]);
    }
  }

  return result;
};

const anotherResult = anotherEven(theArray);

console.log(anotherResult);
