

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
  
var primos = 0;
var primosArray = [];
var n = 6;
for (var index = 0; primos < n; index++){
if (isPrime(index) == true){
    console.log("eh Primo!!");
    primosArray.push(index);
    primos++;
    
}else {
    console.log("não eh primo!!");
}
isPrime(index);
}
console.log(primosArray[n-1]);

