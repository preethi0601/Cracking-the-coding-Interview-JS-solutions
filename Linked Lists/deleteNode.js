// Delete a node in a singly linked list, given access to only that node

class Node {
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}

function deleteNode(head, position) {
    let prev = null;
    if(head == null) return head;
    let current = head;
    if(position == 1) {
        head = current.next;
        return head;
    }
    for(let i = 1; current!= null && i < position; i++) {
        prev = current;
        current = current.next;
    }
    if(current!=null) prev.next = current.next;
    else console.log("No such position");

    return head;
}

function printList(head) {
    let curr = head;
    while (curr != null) {
        console.log(curr.data + " ");
        curr = curr.next;
    }
}



let head = new Node(12);
head.next = new Node(11);
head.next.next = new Node(12);
head.next.next.next = new Node(21);
head.next.next.next.next = new Node(41);
head.next.next.next.next.next = new Node(43);
head.next.next.next.next.next.next = new Node(21);

console.log("Before deleting: ");
printList(head);
head = deleteNode(head, 2);
console.log("After deleting: ")
printList(head);

// Time complexity : O(N)
// Space complexity: O(1)