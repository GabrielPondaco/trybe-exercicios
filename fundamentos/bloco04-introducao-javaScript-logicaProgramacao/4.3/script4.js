let array = ['java', 'javascript', 'python', 'html', 'css'];

function maior (array){
    let maior = array[0];
    for (let palavra of array){
        if (palavra.length > maior.length){
            maior = palavra;
        }
    }


    return maior;
}

function menor (array){
    let menor = array[0];
    for (let palavra of array){
        if (palavra.length < menor.length){
            menor = palavra;
        }
    }

    return menor;
}

console.log(maior(array));
console.log(menor(array));