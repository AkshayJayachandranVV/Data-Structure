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
        return this.size==0
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

  remove(index){
    if(index<0 || index>this.size){
        return null
    }
     let removeNode
    if(index===0){
        removeNode=this.head
        this.head=this.head.next
    }else{
        let prev=this.head
        for(let i=0;i<index-1;i++){
            prev=prev.next
        }
        removeNode=prev.next
        prev.next=removeNode.next
    }
    this.size--
    return removeNode.value
  }
    

   print(){
    let listValues=""
    let curr=this.head
    while(curr){
        listValues+=`${curr.value} `
        curr=curr.next
    }
    console.log(listValues)
   }
}


const list=new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.print()

list.remove(89)
list.print()

