let arr=[-5,2,4,6,10]

function recursiveBinarySearch(target){
   return search(target,0,arr.length-1)
}

function search(target,leftIndex,rightIndex){
    if(leftIndex>rightIndex){
        return -1
    }
    
    let midIndex=Math.floor((leftIndex+rightIndex)/2)

    if(arr[midIndex]==target){
        return midIndex
    }

    if(arr[midIndex]<target){
        return search(target,midIndex+1,rightIndex)
    }else{
        return search(target,leftIndex,midIndex-1)
    }
}

console.log(recursiveBinarySearch(2))
console.log(recursiveBinarySearch(6))
console.log(recursiveBinarySearch(20))