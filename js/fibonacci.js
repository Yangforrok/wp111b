function fibonacci(n){
    if(n=0){
        fibonacci(0)=0;
    }
    if(n=1){
        fibonacci(1)=1;
    }
    else return fibonacci(n-1)+fibonacci(n-2);
}
console.log(isPrime(7));
console.log(isPrime(1));