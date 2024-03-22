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


    doublePrepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
            this.size++
        }else{
            this.head.prev=node
            node.next=this.head
            this.head=node
            this.size++
        }
    }


    doubleAppend(value){
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

// list.doublePrepend(10)
// list.doublePrepend(20)
// list.doublePrepend(30)

list.doubleAppend(10)
list.doubleAppend(11)
list.doubleAppend(12)
list.doubleAppend(13)

list.print()