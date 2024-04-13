class Node{
    constructor(){
        this.children = {};
        this.isWordEnd = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }
    insert(word){
        let curr = this.root;
        for(let i=0;i<word.length;i++){
            let charToInsert = word[i];
            if(!curr.children.hasOwnProperty(charToInsert)){
                curr.children[charToInsert] = new Node();
            }
            curr = curr.children[charToInsert];
        }
        curr.isWordEnd = true;
    }
   search(word){
        let curr = this.root;
        for(let i=0;i<word.length;i++){
            let charToFind = word[i];
            if(!curr.children.hasOwnProperty(charToFind)){
                return false;
            }
            curr = curr.children[charToFind];
        }
        return curr.isWordEnd;
    }
    startWithPrefix(prefix){
        let curr = this.root;
        for(let i=0;i<prefix.length;i++){
            let charToFind = prefix[i];
            if(!curr.children.hasOwnProperty(charToFind)){
                return false;
            }
            curr = curr.children[charToFind];
        }
        return true;
    }
    displayTrie(){
        this._displayTrieHelper(this.root,"");
    }
    _displayTrieHelper(node,currentString){
        if(node.isWordEnd){
            console.log(currentString);
        }
        for(const char in node.children){
            if(node.children.hasOwnProperty(char)){
                this._displayTrieHelper(node.children[char],currentString+char)
            }
        }
    }
    delete(word){
        if(!this.search(word)){
            console.log(`the word "${word}" is not in the Trie`);
            return;
        }
        this._deleteHelper(this.root,word,0)
        return;
    }
    _deleteHelper(node,word,index){
        if(index === word.length){
            node.isWordEnd = false;
            return;
        }
        const charToDelete = word[index];
        const nextNode = node.children[charToDelete];
        this._deleteHelper(nextNode,word,index+1);



        if(Object.keys(nextNode.children).length===0&&!nextNode.isWordEnd){
            delete node.children[charToDelete];
        }
    }
}

const newTrie = new Trie();
newTrie.insert("app");
newTrie.insert("apple");
newTrie.insert("banana");
newTrie.displayTrie()
console.log(newTrie.search+("banana"));//true
newTrie.delete("apple");
newTrie.displayTrie()//["app","banana"]
console.log(newTrie.startWithPrefix("ana"));//false
console.log(newTrie.startWithPrefix("bana"));//true