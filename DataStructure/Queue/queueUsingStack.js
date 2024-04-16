class Queue {
    constructor() {
        this.stackPush = [];
        this.stackPop = [];
    }
    
    push(value) {
        this.stackPush.push(value);
        return true;
    }
    
    pop() {
        if (!this.stackPop.length) {
            while (this.stackPush.length) {
                this.stackPop.push(this.stackPush.pop());
            }
        }
        return this.stackPop.pop();
    }
    
    print() {
        return [this.stackPush, this.stackPop];
    }
}

const queue = new Queue();
queue.push(10);
queue.push(20);
console.log(queue.print());
