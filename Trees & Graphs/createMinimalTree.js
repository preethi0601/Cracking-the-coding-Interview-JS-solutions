// Given a sorted (increasing order) array with unique integer elements, 
// write an algorithm to create a binary search tree with minimal height.

 
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


function constructBst(arr) {
    if(!arr.length) return null;
    return constructMinimalTree(arr, 0, arr.length - 1)
}

function constructMinimalTree(arr, start, end) {
    if(start > end) return null;
    let mid = Math.floor((start + end) /2);
    let node = new TreeNode(arr[mid]);

    node.left = constructMinimalTree(arr, start, mid - 1);

    node.right = constructMinimalTree(arr, mid + 1, end);

    return node;
}

function printBST(root) {
    if(root!=null) {
        printBST(root.left);
        console.log(root.value);
        printBST(root.right);
    }
}

let inputArr = [1, 2, 3, 4, 5, 6, 7];
let root = constructBst(inputArr);
printBST(root);


// Time complexity: O(N) - Input array length
// Space complexity: O(N) - O(N) (for each node creation) + O(log N) (for recursion)