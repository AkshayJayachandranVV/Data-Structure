function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let numberToInsert=arr[i]
        j=i-1
        while(j>=0 && arr[j]>numberToInsert){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=numberToInsert
    }
}
let arr=[4,2,6,-1,7,9]

insertionSort(arr)
console.log(arr)
//Big O==> O(n^2)