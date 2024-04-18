class Node{
    constructor(val){
        this.val=val
        this.children={}
        this.isEnd=false
    }
}

class Trie{
    constructor(){
        this.root=new Node(null)
    }

    insert(word){
        let curr=this.root
        for(let char of word){
            if(!curr.children[char]){
                curr.children[char]=new Node(char)
            }   
            curr=curr.children[char]
        }
        curr.isEnd=true
    }

        search(word){
            let curr=this.root
            for(let char of word){
                if(!curr.children[char]){
                    return false
                }
                curr=curr.children[char]
            }
            return  curr.isEnd
        }

        startsWith(prefix){
            let curr=this.root
            for(let char of prefix){
                if(!curr.children[char]){
                    return false
                }
                curr=curr.children[char]
            }
            return true
        }

        findSuggestions(prefix){
            let current=this.root
            for(let char of prefix){
                if(!current.children[char]){
                    return []
                }
                current=current.children[char]
            }
            let suggestions=[]
            this.collectSuggestions(current,prefix,suggestions)
            return suggestions
        }

        collectSuggestions(node,prefix,suggestions){
            if(node.isEnd){
                suggestions.push(prefix)
            }

            for(let child in node.children){
                this.collectSuggestions(node.children[child],prefix+child,suggestions)
            }
        }
}

const myTrie=new Trie()
myTrie.insert("Brocamp")
myTrie.insert("Broca")
myTrie.insert("HelloWorld")
myTrie.insert("HelloWorkplace")
console.log(myTrie.startsWith("Br"));
console.log(myTrie.findSuggestions("Hello"));
// console.log(myTrie.search("Broca"));