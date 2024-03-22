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


    reverse(){
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


    remove(value){
        let removeNode
        if(this.isEmpty()){
            removeNode=this.head
            this.head=this.head.next
            this.size--
        }else{
            let curr=this.head
            while(curr.next && curr.next.value!=value){
                curr=curr.next
            }
            removeNode=curr.next
            curr.next=removeNode.next
            this.size--
        }
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


    search(target){
        console.log("hyyyy")
        if(this.isEmpty()){
            return -1
        }else{
            console.log("juue")
           let curr=this.head
           let i=0
           while(curr){
            if(curr.value===target){
                return i
            }
            curr=curr.next
            i++
           } 
        }
        return -1
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


const list =new LinkedList()
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
list.append(10)
list.append(40)
list.append(50)

list.print()

// list.reverse()
// list.remove(20)
console.log(list.search(20)
)

// list.print()