// bubble sort
function bubbleSort(arr){
    let swapped
    do{
        swapped=false
        for(let i=0;i<arr.length;i++){
            if(arr[i]>arr[i+1]){
             let temp =  arr[i]
             arr[i]=arr[i+1]
             arr[i+1]=temp
             swapped=true
            }
        }
    }while(swapped)
    return arr
}

const arr=[4,-2,7,-3,56,3]
console.log(bubbleSort(arr))


// insertionSort
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){ 
        let numberToInsert = arr[i]
        let j=i-1
        while(j>=0&&arr[j]>numberToInsert){
       arr[j+1]=arr[j]
       j=j-1
        }
        arr[j+1]=numberToInsert
    }
    return arr
}

const array=[5,4,3,2,1]
console.log(insertionSort(array));


// quickSort
function quickSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left =[]
    let right=[]
for(let i=0;i<arr.length-1;i++){
if(arr[i]<pivot){
    left.push(arr[i])
}else{
    right.push(arr[i])
}
}
return [...quickSort(left),pivot,...quickSort(right)]
}

const array3=[8,0,-3,1,4]
console.log(quickSort(array3));


// mergeSort
function mergeSort(arr){
if(arr.length<2){
    return arr
}
const mid =Math.floor(arr.length/2)
const leftArr=arr.slice(0,mid)
const rightArr = arr.slice(mid)
return   merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){
    const sortedArr=[]
    while(leftArr.length&&rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortedArr.push(leftArr.shift())
        }else{
            sortedArr.push(rightArr.shift())
        }
    }
    return[...sortedArr,...leftArr,...rightArr]
}

const array4=[-1,9,-6,5,4]
console.log(mergeSort(array4));


// selectionSort
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let minIndex=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex]){
                minIndex=j
            }
        }
        const temp=arr[i]
        arr[i]=arr[minIndex]
        arr[minIndex]=temp
    }
    return arr
}

const array5=[9,5,2,7,8]
console.log(selectionSort(array5));