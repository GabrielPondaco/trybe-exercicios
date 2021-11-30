function bubbleSort(array){
for (let index = 1; index < array.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (array[index] < array[secondIndex]) {
        let position = array[index];
        array[index] = array[secondIndex];
        array[secondIndex] = position;
      }
    }
  }
}
/*bubbleSort(numbers);
console.log(numbers);
//crescente ^^^^
numbers.reverse();
console.log(numbers);
//descrescente ^^^^^*/



function multiplicaProximo(){
    let result = 0;
    for (let index = 0; index < numbers.length-1; index += 1){
            result = numbers[index]*numbers[index+1];
            multiplicado.push(result);  
    }
    result = numbers[numbers.length-1]*2;
    multiplicado.push(result);
}


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicado = [];
multiplicaProximo();
console.log(multiplicado);



