class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }

    doublyAppend(value){
        const node=new Node(value)
            if(this.isEmpty()){
                this.head=node
                this.tail=node
                this.size++
            }else{
                this.tail.next=node
                node.prev=this.tail
                this.tail=node
                this.size++
            }
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let curr=this.head
            while(curr){
                console.log(curr.value)
                curr=curr.next
            }
        }
    }
}


const list=new LinkedList()

list.doublyAppend(11)
list.doublyAppend(22)
list.doublyAppend(33)
list.print()