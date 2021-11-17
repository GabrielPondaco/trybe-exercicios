/*function even_fibonacci_numbers(roof) {
    // Write your code here
    
}*/
    
    var roof = 100;
    var soma = 0;
    var fibonacci = [1,2];
    for (var index =1; (fibonacci[index]+fibonacci[index-1])<roof; index++){
        fibonacci.push(fibonacci[index-1]+fibonacci[index]);
        if (fibonacci[index]%2 == 0){
                soma = soma + fibonacci[index];
        }
    }
    if (fibonacci[index-1]%2==0){
        
        soma = soma + fibonacci[index];
    }
    
    console.log(fibonacci);
    console.log(soma);