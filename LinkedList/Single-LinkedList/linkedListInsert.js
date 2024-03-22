//INSERTION AT GIVEN INDEX USING LINKED LIST

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

    insert(value,index){
        const node=new Node(value)
        if(index<0 || index>this.size){
            return 
        }
        
        if(index==0){
           this.prepend(value)
        }else{
            let curr=this.head
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            node.next=curr.next
            curr.next=node
        }

        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("List is Empty")
        }else{
            let prev=this.head
            let listValues=""
            while(prev){
                listValues+=`${prev.value} `
                prev=prev.next
            }
            console.log(listValues)
        }      
    }
}

const list=new LinkedList()

console.log("List is Empty",list.isEmpty())

console.log("Size",list.getSize())

list.prepend(10)
list.prepend(20)
list.prepend(40)

list.print()

list.insert(33,-2)

list.print()

