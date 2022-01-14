const isEven = (number) => number % 2 === 0;

const arraySum = (array) => {
  let sum = 0;
  for (let i of array) {   
    isEven(i) && (sum += i);
  }
  return sum;
}

console.log(arraySum([1, 2, 4, 5, 6, 9, 7]));

isEven(i) ? sum += i : sum = sum;


for (let index = 0; index < array.length-1 ; index += 1) {
  isEven(array[index]) && (sum += i);
}

