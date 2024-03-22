let arr=[-5,2,4,6,10]

function binarySearch(target){
    let leftIndex=0
    let rightIndex=arr.length-1
    while(leftIndex <= rightIndex){
        let mid=Math.floor((leftIndex+rightIndex)/2)
        if(arr[mid]==target){
            return mid
        }

        if(arr[mid]<target){
            leftIndex=mid+1
        }else{
            rightIndex=mid-1
        }
    }
    return -1
}
  

console.log(binarySearch(-5))
console.log(binarySearch(6))
console.log(binarySearch(20))

//Big O = O(logn) ===>n=n/2



// let mid=Math.floor(arr.length/2)
// let beg=0
// let end=0

// function binarySearch(target){
//     if(arr[mid]==target){
//         return mid
//     }else if(mid<target){
//          beg=mid
//          end=arr.length
//     }else{
//         end=mid
//     }

//     for(i=beg;i<end;i++){
//          if(arr[i]==target){
//             return i
//          }
//     }
//     return -1
// }

// console.log(binarySearch(10))
// console.log(binarySearch(6))
// console.log(binarySearch(20))