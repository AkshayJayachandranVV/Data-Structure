function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let right=[]
    for(i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let arr=[3,4,-2,6,8,1,5]

console.log(quickSort(arr))

//Big O==>O(n^2) Sort Already Sorted
//Avg case ==>O(nlogn)