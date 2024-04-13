// range sum of bst
// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = this.right = null;
//     }
// }
//  rangeSumBST = (bst, low, high) => {
//     if (!bst) {
//         return 0;
//     }
//      sum = 0;

//     if (low <= bst.val && bst.val <= high) {
//         sum += bst.val;
//     }

//     if (bst.left) {
//         sum += rangeSumBST(bst.left, low, high);
//     }
//     if (bst.right) {
//         sum += rangeSumBST(bst.right, low, high);
//     }

//     return sum;
// };
//  bst = new TreeNode(10);
// bst.left = new TreeNode(5);
// bst.right = new TreeNode(15);
// bst.left.left = new TreeNode(3);
// bst.left.right = new TreeNode(7);
// bst.right.right = new TreeNode(18);
//  low = 7;
//  high = 15;
// console.log(rangeSumBST(bst, low, high));

// --------------------------------------------------------------------------------



// mirror bst
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.right = null;
//     this.left = null;
//   }
// }

// function areMirrror(bst1, bst2) {
//   if (!bst1 && !bst2) {
//     return true;
//   }
//   if (!bst1 || !bst2) {
//     return false;
//   }
//   return (
//     bst1.value === bst2.value &&
//     areMirrror(bst1.left, bst2.right) &&
//     areMirrror(bst1.right, bst2.left)
//   );
// }

// let tree1 = new Node(1);
// tree1.left = new Node(2);
// tree1.right = new Node(3);
// tree1.left.left = new Node(4);
// tree1.left.right = new Node(5);

// let tree2 = new Node(1);
// tree2.left = new Node(3);
// tree2.right = new Node(2);
// tree2.right.left = new Node(5);
// tree2.right.right = new Node(4);
// console.log(areMirrror());

// ------------------------------------------------------------




//second largest element in bst
// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }

// function secondLargest(bst){
// if(!bst||(!bst.right&&!bst.left)){
//     return null
// }
// if(bst.left&&!bst.right){
//     let secondLargest = bst.left
//     while(secondLargest.right){
//         secondLargest=secondLargest.right
//     }
//     return secondLargest.value
// }

// if(bst.right&&!bst.right.right&&!bst.right.left){
//     return bst.value
// }
//     let curr=bst;
//     while(curr.right.right){
//         curr=curr.right;
//     }
//     return curr.value

// }

// let bst = new Node(20);
// bst.left = new Node(15);
// bst.right = new Node(25);
// bst.left.left = new Node(13);
// bst.left.right = new Node(16);
// bst.right.right = new Node(35);
// console.log(secondLargest(bst));


// secondlargest element using inorder traversal
// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   inOrderTraversal(root, arr = []) {
//     if (root !== null) {
//       this.inOrderTraversal(root.left, arr);
//       arr.push(root.value);
//       this.inOrderTraversal(root.right, arr);
//     }
//     return arr;
//   }

//   secondLargest(root) {
//     if (root === null) {
//       return null;
//     }
//     let arr = [];
//     this.inOrderTraversal(root, arr);
//     return arr[arr.length - 2];
//   }
// }
// const bst = new BinarySearchTree();

// bst.root = new Node(10);
// bst.root.left = new Node(5);
// bst.root.right = new Node(15);
// bst.root.left.left = new Node(3);
// bst.root.left.right = new Node(7);
// console.log(bst.secondLargest(bst.root));

// ----------------------------------------------------------------------------------------



// second minimum
// class Node{
//     constructor(value){
//         this.value=value
//         this.left=null
//         this.right=null
//     }
// }
// function getSecondMin(bst){

//     function min(bst){
//         if(!bst.left){
//             return bst.value
//         }else{
//             return min(bst.left)
//         }
//     }

//     let minimum = min(bst);
//     let secondMinimum=Infinity;
//     let foundSecondMin= false;
//     function traverse(node){
//         if(!node){
//             return
//         }

//         if(node.value>minimum&&node.value<secondMinimum){
//             secondMinimum=node.value;
//             foundSecondMin=true
//         }
//         traverse(node.left);
//         traverse(node.right)
//     }
//     traverse(bst)
//     return foundSecondMin ? secondMinimum : -1
// }

// const node = new Node(20);
// node.left = new Node(15);
// node.right = new Node(25);
// node.left.right = new Node(17);
// console.log(getSecondMin(node));


// secondminimum using inordertraversal
// class Node{
//     constructor(value){
//         this.value = value
//         this.left=null
//         this.right=null
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root =null
//     }

//     inorderTraversal(root,arr=[]){
//         if(root!==null){
//         this.inorderTraversal(root.left,arr)
//         arr.push(root.value)
//         this.inorderTraversal(root.right,arr)
//         }
//         return arr
//     }

//     findSecondminimum(root){
// if(root===null){
//     return null
// }
//         let arr=[]
//        this.inorderTraversal(root,arr)
//         return arr[1]
//     }
// }
// const bst = new BinarySearchTree();

// bst.root = new Node(10);
// bst.root.left = new Node(5);
// bst.root.right = new Node(15);
// bst.root.left.left = new Node(3);
// bst.root.left.right = new Node(7);
// console.log(bst.findSecondminimum(bst.root));


// ----------------------------------------------------------------------


// find middle element in bst
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BST {
//     constructor() {
//         this.root = null;
//     }

//     inOrderTraversal(node, arr = []) {
//         if (node !== null) {
//             this.inOrderTraversal(node.left, arr);
//             arr.push(node.value);
//             this.inOrderTraversal(node.right, arr);
//         }
//         return arr;
//     }

//     findMiddleElement() {
//         if (this.root === null) {
//             return null;
//         }

//         const nodes = [];
//         this.inOrderTraversal(this.root, nodes);

//         if (nodes.length % 2 === 1) {
//             return nodes[Math.floor(nodes.length / 2)];
//         } else {
//             return nodes[nodes.length / 2 - 1];
//         }
//     }

// }

// const bst = new BST();
// bst.root= new Node(10);
// bst.root.left= new Node(5);
// bst.root.right= new Node(15)
// bst.root.left.left= new Node(3);
// bst.root.left.right= new Node(7);
// console.log(bst.findMiddleElement());


// ---------------------------------------------------


// find the Lowest Common Ancestor (LCA) between two nodes
// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// function findLCA(root, node1, node2) {
//     if (root === null) {
//         return null;
//     }
//     if (root.value === node1 || root.value === node2) {
//         return root;
//     }

//     const left = findLCA(root.left, node1, node2);
//     const right = findLCA(root.right, node1, node2);

//     if (left !== null && right !== null) {
//         return root;
//     }

//     return left !== null ? left : right;
// }



// const node = new TreeNode(1);
// node.left= new TreeNode(2)
// node.right= new TreeNode(3)
// node.left.left= new TreeNode(4)
// node.left.right= new TreeNode(5)
// node.right.left= new TreeNode(6)
// node.right.right= new TreeNode(7)

// const lca45 = findLCA(node, 4, 5);

// console.log("LCA of 4 and 5 is:", lca45.value);


// ------------------------------------------------------------/


// <-------------Shortest path Between Nodes----------------->
// <--------------------------Dijkstra Algo---------------------------------->

// const graph = {
//     A: { B: 1, C: 4 },     
//     B: { A: 1, C: 2, D: 5 },
//     C: { A: 4, B: 2, D: 1 },
//     D: { B: 5, C: 1 }
// };

// function dijkstra(graph, start) {
//     let distances = {};
//     let visited = new Set();
//     let nodes = Object.keys(graph);
//     for (let node of nodes) {
//         distances[node] = Infinity;
//     }
//     distances[start] = 0;
//     while (nodes.length) {
//         nodes.sort((a, b) => distances[a] - distances[b]);
//         let closestNode = nodes.shift();
//         if (distances[closestNode] === Infinity) break;
//         visited.add(closestNode);
//         for (let neighbor in graph[closestNode]) {
//             if (!visited.has(neighbor)) {
//                 let newDistance = distances[closestNode] + graph[closestNode][neighbor];
//                 if (newDistance < distances[neighbor]) {
//                     distances[neighbor] = newDistance;
//                 }
//             }
//         }
//     }
//     return distances;
// }

// // Example: Find shortest distances from node A to all other nodes in the graph
// console.log(dijkstra(graph, "A")); // Outputs: { A: 0, B: 1, C: 3, D: 4 }




//<-----------------Find Center of Star Graph------------------------->


// var findCenter = function(edges, nodeNames) {
//     const [[a, b], [c, d]] = edges;
//     const centerNodeNumber = a === c || b === c ? c : d;
//     return nodeNames[centerNodeNumber];
// };

// // Example usage:
// const edges = [[1, 2], [1, 3], [1, 4]];
// const nodeNames = {
//     1: 'Node1',
//     2: 'Node2',
//     3: 'Node3',
//     4: 'Node4'
// };
// console.log(findCenter(edges, nodeNames));