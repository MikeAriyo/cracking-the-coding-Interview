// Write code to partition a linked list around a value x, such that all nodes less than x come
// before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
// to be after the elements less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions in Javascript

function partition(head, x) {
  // Create two dummy nodes to serve as the heads of the left and right partitions
  let leftDummy = new ListNode();
  let rightDummy = new ListNode();

  // Create pointers to traverse the list and build the left and right partitions
  let left = leftDummy;
  let right = rightDummy;
  let current = head;

  // Traverse the list and add each node to the appropriate partition
  while (current) {
    if (current.val < x) {
      left.next = current;
      left = left.next;
    } else {
      right.next = current;
      right = right.next;
    }
    current = current.next;
  }

  // Combine the left and right partitions
  left.next = rightDummy.next;
  right.next = null;

  // Return the head of the left partition
  return leftDummy.next;
}
