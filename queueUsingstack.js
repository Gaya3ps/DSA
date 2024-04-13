class Queue {
    constructor() {
      this.stack1 = [];
      this.stack2 = [];
    }
  
    enqueue(item) {
      // To enqueue an item, we push it into stack1
      this.stack1.push(item);
    }
  
    dequeue() {
      if (this.stack2.length === 0) {
        // If stack2 is empty, we need to transfer elements from stack1 to stack2
        while (this.stack1.length > 0) {
          this.stack2.push(this.stack1.pop());
        }
      }
      // Pop from stack2 to dequeue the item
      return this.stack2.pop();
    }
  
    front() {
      if (this.stack2.length === 0) {
        // If stack2 is empty, the front element is at the bottom of stack1
        return this.stack1[0];
      } else {
        // Otherwise, it's the top element of stack2
        return this.stack2[this.stack2.length - 1];
      }
    }
  
    isEmpty() {
      return this.stack1.length === 0 && this.stack2.length === 0;
    }
  }
  
  
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  
  console.log("Front element:", queue.front());  
  console.log("Dequeued element:", queue.dequeue());  
  
  console.log("Is queue empty?", queue.isEmpty());  
  
  console.log("Dequeued element:", queue.dequeue());  
  console.log("Dequeued element:", queue.dequeue());  
  
  console.log("Is queue empty?", queue.isEmpty());  
  