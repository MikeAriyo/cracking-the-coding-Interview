// You have two numbers represented by a linked list, where each node contains a single
// digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
// function that adds the two numbers and returns the sum as a linked list in Jacascript

function addLists(list1, list2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  let p1 = list1,
    p2 = list2;

  while (p1 !== null || p2 !== null) {
    let x = p1 !== null ? p1.val : 0;
    let y = p2 !== null ? p2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (p1 !== null) {
      p1 = p1.next;
    }
    if (p2 !== null) {
      p2 = p2.next;
    }
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
  }
  return dummyHead.next;
}
