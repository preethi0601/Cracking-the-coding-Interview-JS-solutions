// Given two linked list, with numbers in reverse, find the sum
// Follow up - if they're not in reverse

class Node {
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}


function sumOfLists(l1, l2) {
    let dummy = new Node(0);
    let res = dummy;
    let total = 0, carry = 0;

    while (l1 || l2 || carry) {
        total = carry;

        if (l1) {
            total += l1.data;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.data;
            l2 = l2.next;
        }

        let num = total % 10;
        carry = Math.floor(total / 10);
        dummy.next = new Node(num);
        dummy = dummy.next;
    }

    return res.next;   
}

function printList(head) {
    let curr = head;
    while (curr != null) {
        console.log(curr.data + " ");
        curr = curr.next;
    }
}

let head1 = new Node(1);
head1.next = new Node(6);
head1.next.next = new Node(4);

let head2 = new Node(2)
head2.next = new Node(6);
head2.next.next = new Node(3);


head = sumOfLists(head1, head2)
printList(head);


// Time complexity : O(N + M) : N, M - length of two inputs
// Space complexity: O(1)