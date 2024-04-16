class Queue{
    constructor(){
        this.items=[]
    }

    enQueue(value){
        this.items.push(value)
    }

    deQueue(){
        this.items.shift()
    }

    isEmpty(){
        return this.items.length===0
    }

    getSize(){
        return this.items.length
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[0]
        }
        return null
    }

    print(){
        console.log(this.items.toString());
    }
}


const queue=new Queue()

queue.enQueue(10)
queue.enQueue(20)
queue.enQueue(30)
console.log("checking list is Empty :"+queue.isEmpty())
console.log("Size of the list :"+queue.getSize())
console.log(queue.peek())
queue.print()
queue.deQueue()
queue.print()