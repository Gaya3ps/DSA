class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push element onto stack
    push(element) {
      this.items.push(element);
    }
  
    // Remove and return top element of stack
    pop() {
      if (this.items.length === 0) {
        return "Undefined"; 
      }
      return this.items.pop();
    }
  
    // View the top element of the stack
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack
    size() {
      return this.items.length;
    }
  
    // Clear the stack
    clear() {
      this.items = [];
    }
  
    // Display the stack elements
    display() {
      console.log(this.items.toString());
    }
  }
  
  
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  console.log(stack.peek()); 
  stack.display(); 
  stack.pop(); 
  stack.display();