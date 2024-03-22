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


    prepend(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
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

const list=new LinkedList()

//Big O =>O(n)

console.log("List is Empty",list.isEmpty())
console.log("size",list.getSize())

list.print()

list.prepend(10)
list.prepend(20)
list.print()