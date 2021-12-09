/*let n = 5;
let asteriscos = [];
for (let index = 0; index < n; index += 1){
    for (let j =0; j < n; j+= 1){
        asteriscos.push("*");
    }
    console.log(asteriscos.join(''));
    asteriscos = [];
}
*/
/*let n = 5;
let asteriscos = [];
for (let index = 0; index < n; index += 1){
    for (let j =0; j <= index; j+= 1){
        asteriscos.push("*");
    }
    console.log(asteriscos.join(''));
    asteriscos = [];
}*/

/*
let n = 5;
let asteriscos = [];
for (let index = 0; index < n; index += 1){
    for (let j =0; j < n; j+= 1){
        if (j > index){
            asteriscos.push(" ");
        }
        else {
            asteriscos.push("*");
        }
    }
    asteriscos.reverse();
    console.log(asteriscos.join(''));
    asteriscos = [];
}
*/
let n = 5;
let asteriscos = [];
let mid = (n+1)/ 2;
let esquerdo = mid;
let direito = mid;
for (let index = 0; index < mid; index += 1){
    for (let j =0; j < n; j+= 1){
        if (j >= esquerdo-1 && j <= direito-1 ){
            asteriscos.push("*");
        }
        else {
            asteriscos.push("-");   
        }
    }
    esquerdo -= 1;
    direito += 1;
    console.log(asteriscos.join(''));
    asteriscos = [];
}/*
/*
let n = 9;
let asteriscos = [];
let mid = (n+1)/ 2;
let esquerdo = mid;
let direito = mid;
for (let index = 0; index < mid; index += 1){
    for (let j =0; j < n; j+= 1){
        if (j >= esquerdo-1 && j <= direito-1 && index === 0){
            asteriscos.push("*");
        }
        else if (j == esquerdo-1 || j == direito-1) {
            asteriscos.push('*');
        }
        else {
            asteriscos.push(" ");   
        }
    }
    esquerdo -= 1;
    direito += 1;
    if (index === mid-1){
        asteriscos = [];
        for (let j = 0; j < n; j+=1){
            
            asteriscos.push('*');
        }
    }

    console.log(asteriscos.join(''));
    asteriscos = [];
}




let n = 5;
let symbol = '*';
let line = '';
for (let i = 1; i <= n; i += 1){
    for (let j = 1; j <= n; j +=1){
        console.log("a");
    }
}


let abc = "abc";
console.log(abc.repeat(3));