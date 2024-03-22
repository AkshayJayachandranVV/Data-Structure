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
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }

revserse(){
    let curr=this.head
    let prev=null
    while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    this.head=prev
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

console.log("List is Empty",list.isEmpty())
console.log("Size:",list.getSize())


list.append(10)
list.print()

list.append(33)
list.append(44)
list.print()


list.revserse()
list.print()

// list.print()

// console.log(list.removeValue(111))

// list.print()