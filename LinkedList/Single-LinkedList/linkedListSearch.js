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

search(target){
    if(this.isEmpty()){
        return null
    }

  let curr=this.head
  let i=0
  while(curr){
    if(curr.value===target){
        return i
    }
    curr=curr.next
    i++
  }
  return null
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


console.log(list.search(10))

// list.print()

// console.log(list.removeValue(111))

// list.print()