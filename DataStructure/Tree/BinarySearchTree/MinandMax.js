class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(value){
        this.root=null
    }
    
    isEmpty(){
        return this.root==null
    }
    
    insert(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    
    
    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right==null){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }
    
    
    search(root,value){
        if(!root){
            return false
        }else if(root.value==value){
            return true
        }else if(value<root.value){
            return this.search(root.left,value)
        }else{
            return this.search(root.right,value)
        }
    }
    
   breadthFirstSearch(){
       let queue=[]
       queue.push(this.root)
       while(queue.length){
           let curr=queue.shift()
           console.log(curr.value)
           if(curr.left){
               queue.push(curr.left)
           }
           if(curr.right){
               queue.push(curr.right)
           }
       }
   }
   
   min(root){
       if(!root.left){
           return root.value
       }else{
           return this.min(root.left)
       }
   }
   
   max(root){
       if(!root.right){
           return root.value
       }else{
           return this.max(root.right)
       }
   }
    
}


const bst=new BinarySearchTree()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))