class Stack{
    constructor(){
        this.items=[]
    }

    isEmpty(){
        return this.items.length==0
    }

    getSize(){
        return this.items.length
    }

    peek(){
        return this.items[0]
    }

    push(value){
        this.items.unshift(value)
    }

    pop(){
        this.items.shift()
    }

    print(){
    console.log(this.items.toString())
    }
}


const stack=new Stack()

stack.push(10)
stack.push(20)
stack.push(30)
console.log(stack.getSize())
console.log(stack.isEmpty());
console.log(stack.peek());
stack.print()
stack.pop()
stack.print()