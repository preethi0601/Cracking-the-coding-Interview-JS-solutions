/* Implement a function to check if a binary tree is balanced. For the purposes of
this question, a balanced tree is defined to be a tree such that the heights of the two subtrees of any
node never differ by more than one. 
*/

class Node{
    constructor(data){
        this.data = data
        this.left = this.right = null
    }
}

function isBalanced(root)
{
    if (root == null)
            return 0;
        let left = isBalanced(root.left);
        if (left == -1)
            return -1;
        let right = isBalanced(root.right);
        if (right == -1)
            return -1;

        return Math.abs(left - right) > 1 ? -1 : Math.max(left, right) + 1;
}


let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(6)
root.left.left.left = new Node(10)

    console.log(isBalanced(root) > 0 ? 'Balanced' : 'Not Balanced');


/*       
           1
      2        3
   4     6 
10

*/

// Time complexity: O(N) 
// Space complexity: O(h) - height of binary tree 