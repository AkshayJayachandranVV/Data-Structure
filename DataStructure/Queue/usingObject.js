class Queue{
    constructor(){
        this.items={}
        this.rear=0
        this.front=0
    }

    enQueue(value){
        this.items[this.rear]=value
        this.rear++
    }

    deQueue(){
        const item=this.items[this.front]
        delete this.items[this.front]
        this.front++
    }

    isEmpty(){
        return this.rear-this.front===0
    }

    getSize(){
        return this.rear-this.front
    }

    peek(){
        return this.items[this.front]
    }

    print(){
        console.log(this.items)
    }
}

//Time Complexity==>O(1)   while using Object

const queue=new Queue()
queue.enQueue(10)
queue.enQueue(20)

console.log(queue.isEmpty());
console.log(queue.getSize());
console.log(queue.peek());
queue.print()
queue.deQueue()
queue.print()