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
    
    middle(){
      let fast=this.head
      let slow=this.head
      
      while(fast && fast.next){
          fast=fast.next.next
          slow=slow.next
      }
      console.log(slow.value)
      return slow.value
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

list.append(100)
list.append(200)
list.append(500)
list.append(300)


list.middle()
list.print()
