const bfs = require('./bfs')
 
//[4,5],[5,3],[1,5],[2,5]
test('passing another edges list should return resulting tree', () => {
  expect(bfs.getTree(1,[[4,5],[5,3],[1,5],[2,1]]).toString()).toBe([1,2,5,3,4].toString());
});