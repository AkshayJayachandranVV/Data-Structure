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

removeValue(target){
    if(this.isEmpty()){
        return null
    }
    let removeNode
    if(this.head.value==target){
        removeNode=this.head
        this.head=this.head.next
        this.size--
        return removeNode
    }else{
        let prev=this.head
        while(prev.next && prev.next.value!==target){
            prev=prev.next
        }
        removeNode=prev.next
        prev.next=removeNode.next
        this.size--
        return removeNode
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


const list=new LinkedList()

console.log("List is Empty",list.isEmpty())
console.log("Size:",list.getSize())


list.append(10)
list.print()

list.append(33)
list.append(44)
list.print()

list.removeValue(44)
list.print()