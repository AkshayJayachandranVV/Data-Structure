 function powerOfTwo(n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
 }

 console.log(powerOfTwo(1))//true
 console.log(powerOfTwo(2))//false
 console.log(powerOfTwo(5))//false

 //Big O = 0(logn) ====>n=n/2

