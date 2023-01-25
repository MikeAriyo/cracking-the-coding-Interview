// Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop

function findLoopStart(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  if (fast === null || fast.next === null) {
    return null; // no loop
  }

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
