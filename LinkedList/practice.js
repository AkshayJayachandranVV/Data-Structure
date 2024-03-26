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

    remove(value){
        if(this.isEmpty()){
            return null
        }

        if(this.head.value==value){
            this.head=this.head.next
            this.size++
        }else{
            let curr=this.head
            while(curr.next && curr.next.value!==value){
                curr=curr.next
            }
            let removeNode=curr.next
            curr.next=removeNode.next
            this.size--
        }
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Values")
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

// list.append(11)
// list.append(12)
// list.append(13)
list.prepend(10)
list.prepend(20)
list.prepend(30)
list.remove(10)
list.remove(20)
list.remove(30)
list.print()