class Stack{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    
    push(value){
        this.q2.push(value)
        while(this.q1.length!==0){
            this.q2.push(this.q1.shift())
        }
        this.q=this.q1
        this.q1=this.q2
        this.q2=this.q
    }
    
    pop(){
        if(!this.q1.length)
        return false
        this.q1.shift()
        return true
    }
    
    print(){
        return this.q1
    }
}

const stack=new Stack()
stack.push(10)
stack.push(20)
console.log(stack.print())
stack.pop()
console.log(stack.print())