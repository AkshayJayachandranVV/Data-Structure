function primeNumber(n){
    if(n<2){
       return false
    }
    for(i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

console.log(primeNumber(1))//false
console.log(primeNumber(5))//true
console.log(primeNumber(27))//false
console.log(primeNumber(4))//false

//Big-o = o(sqrt(n)) ====for loop limit sqrt(n)