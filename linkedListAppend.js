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
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
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
            listValues+=`${curr.value}`
            curr=curr.next
        }
        console.log(listValues)
       }
     
    }
}

//Big O =>O(1)

const list=new LinkedList()

console.log(list.isEmpty())
console.log(list.getSize())

list.append(10)
list.append(20)

list.print()