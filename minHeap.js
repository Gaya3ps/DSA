class minHeap{
    constructor(){
        this.heap = [];
    }
    getParentIndex(index){
        return Math.floor((index-1)/2);
    }
    getLeftChildIndex(index){
        return index*2+1;
    }
    getRightChildIndex(index){
        return index*2+2;
    }
    swap(index1,index2){
        const temp = this.heap[index1];
        this.heap[index1]  = this.heap[index2];
        this.heap[index2] = temp;
    }
    
    heapifyUp(index){
        const parentIndex = this.getParentIndex(index);
        if(parentIndex>=0&&this.heap[parentIndex]>this.heap[index]){
            this.swap(index,parentIndex);
            this.heapifyUp(parentIndex);
        }
    }
    insert(value){
        this.heap.push(value);
        this.heapifyUp(this.heap.length-1);
    }
    remove(){
        if(this.heap.length===0){
            return null;
        }
        if(this.heap.length===1){
           return  this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }
    heapifyDown(index){
        const leftChildIndex = this.getLeftChildIndex(index);
        const rightChildIndex = this.getRightChildIndex(index);
        let minIndex = index;
        if(leftChildIndex<this.heap.length&&this.heap[leftChildIndex]<this.heap[minIndex]){
            minIndex = leftChildIndex;
        }
        if(rightChildIndex<this.heap.length&&this.heap[rightChildIndex]<this.heap[minIndex]){
            minIndex = rightChildIndex;
        }
        if(minIndex!==index){
            this.swap(index,minIndex);
            this.heapifyDown(minIndex);
        }
    }
    minHeapSort(){
        let sortedArray = [];
        while(this.heap.length>0){
            sortedArray.push(this.remove());
        }
        return sortedArray;
    }
    buildHeapFromArray(array){
        this.heap = array;
        const leftNonLeafIndex = Math.floor((array.length-2)/2);
        for(let i=leftNonLeafIndex;i>=0;i--){
            this.heapifyDown(i);
        }
    }
}

const heap = new minHeap();
heap.insert(10);
heap.insert(2);
heap.insert(9);
console.log(heap.minHeapSort());
heap.buildHeapFromArray([5,1,8,3,5]);
console.log(heap.minHeapSort());