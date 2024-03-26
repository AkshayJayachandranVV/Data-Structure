let swapped
function bubbleSort(arr){
    do{
        swapped=false
        for(i=0;i<arr.length-1;i++){
           if(arr[i]>arr[i+1]){
            let temp=arr[i]
            arr[i]=arr[i+1]
            arr[i+1]=temp
            swapped=true
           }
        }
    }while(swapped)
}
let arr=[3,1,-2,4,6,5]
bubbleSort(arr)

console.log(arr)

//Big O==>O(n^2)