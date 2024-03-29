class Node{
    constructor(value){
        this.value=value
        this.size=null
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

    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.size++
        }else{
            node.next=this.head
            this.head=node
            this.size++
        }
    }

    removeFront(){
        if(this.isEmpty()){
            return "List is Empty"
        }else{
            this.head=this.head.next
            this.size--
        }
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

class LinkedListStack{
    constructor(){
        this.list=new LinkedList()
    }

    push(value){
        this.list.prepend(value)
    }

    pop(){
       this.list.removeFront()
    }

    peek(){
        return this.list.this.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        this.list.print()
    }

}


const stack=new LinkedListStack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.isEmpty()
stack.getSize()
stack.peek()
stack.print()
stack.pop()
stack.print()
