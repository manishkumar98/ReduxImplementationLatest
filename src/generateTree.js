export default function generateTree() {
  let tree = {
    0: {
      id: 0,
      counter: 0,
      childIds: []
    }
  };

  let parentId = Math.floor(Math.pow(Math.random(), 2));
  tree[1] = {
    id: 1,
    counter: 0,
    childIds: []
  };
  tree[parentId].childIds.push(1);

  return tree;
}
