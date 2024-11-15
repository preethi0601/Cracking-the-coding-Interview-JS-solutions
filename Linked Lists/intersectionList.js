
/* Given two (singly) linked lists, determine if the two lists intersect. 
Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth
node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting.  
*/

class Node {
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}

function intersectionList(head1, head2) {
    let ptr1 = head1;
    let ptr2 = head2;

    if (ptr1 === null || ptr2 === null) return null;

    while (ptr1 !== ptr2) {
        ptr1 = ptr1 ? ptr1.next : head2;
        ptr2 = ptr2 ? ptr2.next : head1;
    }
    return ptr1;
}


let head1 = new Node(10);
head1.next = new Node(15);
head1.next.next = new Node(30);

let head2 = new Node(3);
head2.next = new Node(6);
head2.next.next = new Node(9);
head2.next.next.next = head1.next; 

let result = intersectionList(head1, head2) 
console.log(result === null ? "No intersection" : result.data);

// Time complexity : O(N)
// Space complexity: O(1)