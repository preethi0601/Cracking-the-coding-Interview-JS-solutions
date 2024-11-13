
// Write code to remove duplicates from an unsorted linked list. 

class Node {
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}

function removeDuplicates(head) {
    let current = head;

    while(current != null) {
        let temp = current;
        while( temp.next != null) {
            if(current.data == temp.next.data) {
                temp.next = temp.next.next;
            } else {
                temp = temp.next;
            }
        }
        current = current.next;
    }
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

head = removeDuplicates(head);
printList(head);


// Time complexity : O(N)
// Space complexity: O(1)