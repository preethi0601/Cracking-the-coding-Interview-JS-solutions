// Implement an algorithm to find the kth to last element of a singly linked list.

class Node {
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}


function kthtoLast(head, k) {
    let current = head;
    let length = 0;
    while(current!=null) {
        current = current.next; 
        length++;
    }
    
    if(length < k) return -1;
    current = head;
    for(let i = 1; i< length - k + 1; i++) {
        current = current.next;
    }
    return current.data;
}



let head = new Node(12);
head.next = new Node(11);
head.next.next = new Node(12);
head.next.next.next = new Node(21);
head.next.next.next.next = new Node(41);
head.next.next.next.next.next = new Node(43);
head.next.next.next.next.next.next = new Node(21);

console.log(kthtoLast(head, 3));


// Time complexity : O(N)
// Space complexity: O(1)