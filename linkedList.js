class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (!this.head) {
      return null;
    }
    if (this.head.value == value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (!this.head) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  
//to find middle element 
middleelement(){
  if(!this.head){
      return null
  }
  let slow = this.head
  let fast = this.head
  while(fast&&fast.next){
      slow = slow.next
      fast = fast.next.next
  }
  return slow
}



//to remove duplicate elemnets
removeduplicate(){
  let current = this.head
  while(current){
      let runner = current
      while(runner.next){
          if(runner.next.value === current.value){
                runner.next = runner.next.next 
          }else{
              runner = runner.next
          }
      }
      current = current.next
  }
}



  print() {
    if (!this.head) {
      console.log("list is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}
const list = new LinkedList();
list.prepend(10);
list.print();
list.prepend(40);
list.prepend(78);
list.print();
list.prepend(56);
list.print();
list.append(10);
list.print();
list.append(70);
list.append(42);
list.print();
list.insert(20, 0);
list.print();
list.insert(40, 1);
list.print();
list.insert(30, 1);
list.print();
console.log(list.removeFrom(2));
list.print();
list.prepend(70);
list.print();
console.log(list.removeValue(20));
list.print();
console.log(list.search(70));
list.print();
list.reverse();
list.print();
console.log(list.middleelement().value)  