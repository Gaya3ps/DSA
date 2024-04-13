class Stack{
    constructor() {
        this.queue = {};
        this.length = 0;
      }

      
  push(item) {
    // To push an item onto the stack, we enqueue it to the queue
    this.queue[this.length] = item;
    this.length++;
  }

  pop() {
    if (this.length === 0)
     return null;

    // To pop an item from the stack, we remove the last element from the queue
    const poppedItem = this.queue[this.length - 1];
    delete this.queue[this.length - 1];
    this.length--;
    return poppedItem;
  }
  peek() {
    if (this.length === 0) 
    return null;

    // The top element of the stack is the last element in the queue
    return this.queue[this.length - 1];
  }

  empty() {
    return this.length === 0;
  }
    }
    const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Top element:", stack.peek()); 
console.log("Popped element:", stack.pop()); 

console.log("Is stack empty?", stack.empty()); 

console.log("Popped element:", stack.pop()); 
console.log("Popped element:", stack.pop());
console.log("Is stack empty?", stack.empty()); 