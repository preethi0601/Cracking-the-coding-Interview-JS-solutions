// Given a singly linked list, check whether it is a palindrome

class Node {
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}

function palindrome(head) {
    let list = [];
    while(head) {
        list.push(head.data);
        head = head.next;
    }
    let left = 0, right = list.length - 1;
    while(left < right && list[left] === list[right]) {
        left++; right--;
    } 
    return left >= right;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);

console.log(palindrome(head));


// Time complexity : O(N)
// Space complexity: O(1)