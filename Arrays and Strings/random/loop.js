// : Given a circular linked list, implement an algorithm that returns the node at the
//beginning of the loop.

function findLoopStart(head) {
  let slow = head;
  let fast = head;

  // Find the point where the fast and slow pointers meet
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  // Move slow pointer to the head
  slow = head;

  // Find the start of the loop by moving both pointers one step at a time
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
