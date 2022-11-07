const bfs = require('./bfs')
 
test('passing a lengthy edges list return resulting tree', () => {
  expect(bfs.getTree(1,[[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,10],[8,9]]).toString()).toBe([1,3,7,6,2,5,4,10,8,9].toString());
});
