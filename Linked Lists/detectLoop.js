
// Given a circular linked list, detect if it has a loop and return the node at beginning of the loop else -1.

class Node {
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}

function detectLoop(head) {
    let slow = head, fast = head;

    while (slow !== null && fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            return slow.data;
        }
    }
    return -1;
}


let head = new Node(12);
head.next = new Node(11);
head.next.next = new Node(12);
head.next.next.next = new Node(21);
head.next.next.next.next = new Node(41); // Loop
head.next.next.next.next.next = new Node(43);
head.next.next.next.next.next.next = new Node(21); 
head.next.next.next.next.next.next = head.next.next.next.next;// points to 41

console.log(detectLoop(head))


// Time complexity : O(N)
// Space complexity: O(1)