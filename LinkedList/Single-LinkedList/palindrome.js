class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }


    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let curr = this.head
            while (curr.next) {
                curr = curr.next
            }
            curr.next = node
        }
        this.size++
    }


    palindrome() {
        let slow = this.head
        let fast = this.head
        while (fast.next && fast.next.next) {
            slow = slow.next
            fast = fast.next.next
        }

        let prev = null
        let curr = slow.next
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }

        let left = this.head
        let right = prev
        while (right) {
            if (left.value !== right.value) {
                return false
            }
            left = left.next
            right = right.next
        }
        return true;
    }


    print() {
        if (this.isEmpty()) {
            console.log("List is Empty")
        } else {
            let curr = this.head
            let listValues = ""
            while (curr) {
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }

    }
}

//Big O =>O(1)

const list = new LinkedList()

console.log(list.isEmpty())
console.log(list.getSize())

list.append(10)
list.append(20)

list.print()