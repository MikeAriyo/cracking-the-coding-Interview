// Implement an algorithm to find the kth to last element of a singly linked list.

function kthToLast(head, k) {
    let first = head;
    let second = head;

    for (let i = 0; i < k; i++) {
        if (second === null) {
            return null;
        }
        second = second.next;
    }

    while (second !== null) {
        first = first.next;
        second = second.next;
    }

    return first.val;
}