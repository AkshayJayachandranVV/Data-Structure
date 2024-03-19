let arr=[-5,2.10,4,6]

function linearSearch(target){
    for(i=0;i<arr.length;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
}

console.log(linearSearch(-5))
console.log(linearSearch(7))
console.log(linearSearch(4))

//Big O=O(n)