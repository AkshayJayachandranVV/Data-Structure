class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    getSize(){
        return this.size
    }

    append(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.size++
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
            this.size++
        }
    }

    removeFront(){
        if(this.isEmpty()){
            return "List is Empty"
        }
        this.head=this.head.next
        this.size--
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let curr=this.head
            let listValues=""
            while(curr){
                listValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValues)
        }
    }
}

class LinkedListQueue{
    constructor(){
        this.list=new LinkedList()
    }


    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    peek(){
        return this.list.head.value
    }

    enQueue(value){
        this.list.append(value)
    }

    deQueue(){
        this.list.removeFront()
    }

    print(){
        this.list.print()
    }
}

const queue=new LinkedListQueue()
queue.enQueue(10)
queue.enQueue(11)
queue.enQueue(12)
queue.print()
queue.deQueue()
queue.print()