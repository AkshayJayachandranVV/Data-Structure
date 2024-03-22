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


    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.size++
        }else{
            node.next=this.head
            this.head.prev=node
            this.head=node
            this.size++
        }
    }

    append(value){
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
        let listValues=""
        let curr
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            curr=this.head
            while(curr){
                listValues+=`${curr.value} `
                curr=curr.next
            }
            console.log(listValues)
        }
    }
}

const list=new LinkedList()

// list.prepend(90)
// list.prepend(91)
// list.prepend(92)
// list.print()

list.append(11)
list.append(12)
list.append(13)
list.print()