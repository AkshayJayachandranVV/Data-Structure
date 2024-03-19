function recursiveFibinocci(n){
    if(n<2){
        return n
    }
    return recursiveFibinocci(n-1) + recursiveFibinocci(n-2)
}


console.log(recursiveFibinocci(0))
console.log(recursiveFibinocci(1))
console.log(recursiveFibinocci(6))

//O(n) - Iterative
//O(2^n) -Recursive