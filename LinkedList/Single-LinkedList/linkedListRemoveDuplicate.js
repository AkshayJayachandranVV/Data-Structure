//Remove Duplicate Elements in Sorted LinkedList

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
    
  
  removeDuplicates(){
      let curr=this.head
      while(curr && curr.next){
          if(curr.value==curr.next.value){
              let removeNode=curr.next
              curr.next=removeNode.next
              curr=curr
          }else{
                curr=curr.next   
          }
 
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

list.append(100)
list.append(100)
list.append(200)
list.append(500)
list.append(300)
list.append(300)
list.append(300)
list.removeDuplicates()
list.print()



