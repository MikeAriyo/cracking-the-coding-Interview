function findSuccessor(node) {
  if (!node) return null;

  if (node.right) {
    // if there's a right subtree, the successor is the leftmost node in it
    return leftmostNode(node.right);
  } else {
    // if there's no right subtree, the successor is the lowest ancestor
    // whose left child is also an ancestor of the current node
    let current = node;
    let parent = current.parent;
    while (parent && parent.right === current) {
      current = parent;
      parent = parent.parent;
    }
    return parent;
  }
}

function leftmostNode(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}
