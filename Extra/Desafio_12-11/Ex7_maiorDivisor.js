function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}  


var numero = 13195;
for (var index2 = numero; index2 > 0; index2--){
    if (numero%index2 == 0){
        if (isPrime(index2)==true){
            console.log(index2);
            return index2;
        }
    }


}