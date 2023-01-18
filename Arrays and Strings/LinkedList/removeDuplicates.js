function removeDuplicates(head) {
  let current = head;
  let previous = null;
  let values = new Set();

  while (current !== null) {
    if (values.has(current.value)) {
      previous.next = current.next;
    } else {
      values.add(current.value);
      previous = current;
    }
    current = current.next;
  }
}

// This function iterates through the linked list, keeping track of the current and previous nodes. It also uses a Set to keep track of the unique values seen so far. If the current node's value has already been seen, the previous node's "next" pointer is updated to skip over the current node, effectively removing it from the list. If the current node's value has not been seen before, it is added to the Set and the previous node pointer is updated to the current node.

// Note that this function assumes that the linked list is implemented using a class or constructor function with a "value" and "next" property, and that the head of the list is passed as an argument.
