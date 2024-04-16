function createHeap(arr){
    let heap=[...arr]
    for(let i=Math.floor(heap.length/2)-1;i>=0;i--){
        heapify(heap,i,heap.length)
    }

    return heap
}

function heapify(heap,i,heapSize){
    let smallest=i
    let left=2*i + 1
    let right=2*i+2
    if(left<heapSize && heap[smallest]<heap[left]){
        smallest=left
    }

    if(right<heapSize && heap[smallest]<heap[right]){
        smallest=right
    }

    if(smallest!==i){
        [heap[i],heap[smallest]]=[heap[smallest],heap[i]]
        heapify(heap,smallest,heapSize)
    }
}

function heapSort(arr){
    let heap=createHeap(arr)
    let heapSize=heap.length
    while(heapSize>1){
        [heap[heapSize-1],heap[0]]=[heap[0],heap[heapSize-1]]
        heapSize--
        heapify(heap,0,heapSize)
    }
    return heap
}

console.log(heapSort([40,50,20,40,10,70,30,80]))