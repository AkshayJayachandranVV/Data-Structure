function mergeSort(arr){
    if(arr.length<2){
        return arr
    }

    let mid=Math.floor(arr.length/2)
    let leftArr=arr.slice(0,mid)
    let rightArr=arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    let sortedArray=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sortedArray.push(leftArr.shift())
        }else{
            sortedArray.push(rightArr.shift())
        }
    }
    return [...sortedArray,...leftArr,...rightArr]
}

let arr=[3,4,-2,6,8,1,5]    
console.log(mergeSort(arr))





















// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let mid=Math.floor(arr.length/2)
//     let leftArr=arr.slice(0,mid)
//     let rightArr=arr.slice(mid)
//     return(merge(mergeSort(leftArr),mergeSort(rightArr)))
// }

// function merge(leftArr,rightArr){
//     let sortedArray=[]
//     while(leftArr.length && rightArr.length){
//         if(leftArr[0]<rightArr[0]){
//             sortedArray.push(leftArr.shift())
//         }else{
//             sortedArray.push(rightArr.shift())
//         }
//     }
//     return [...sortedArray,...leftArr,...rightArr]
// }

// let arr=[3,4,-2,6,8,1,5]
// console.log(mergeSort(arr))