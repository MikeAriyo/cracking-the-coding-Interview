// Implement an algorithm to delete a node in the middle of a singly linked list given only access to the node.

function deleteNode(node) {
  if (!node || !node.next) {
    return false; // cannot delete the last node or an invalid node
  }
  var nextNode = node.next;
  node.val = nextNode.val;
  node.next = nextNode.next;
  return true;
}
