function fatorial (numero) {
    let fat = 1;
    for (let index = 2; index <= numero; index += 1){
        fat = fat * index;
    }
    return fat;
}

console.log(fatorial(10));