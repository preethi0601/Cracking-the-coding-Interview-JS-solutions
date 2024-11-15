// Given a parition value x, move all nodes less than x to the left and x and greater than x to it's right.
// The initial order of elements must be preserved

class Node {
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}

function partitionList(head, x) {
    if (head === null) return;
    
    const dummy1 = new Node(0);
    const dummy2 = new Node(0);
    let prev1 = dummy1;
    let prev2 = dummy2;
    let current = head;

    while (current !== null) {
        if (current.data < x) {
            prev1.next = current;
            prev1 = current;
        } else {
            prev2.next = current;
            prev2 = current;
        }
        current = current.next;
    }

    prev2.next = null;
    prev1.next = dummy2.next;

    return dummy1.next;
}

function printList(head) {
    let curr = head;
    while (curr != null) {
        console.log(curr.data + " ");
        curr = curr.next;
    }
}



let head = new Node(1);
head.next = new Node(4);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(2);

head = partitionList(head, 3)
printList(head); // [1,2,2,4,3,5]



// Time complexity : O(N)
// Space complexity: O(1)