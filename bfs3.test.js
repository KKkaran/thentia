const bfs = require('./bfs')

test('passing a non-connecting edges list should return tree connecting to node only', () => {
    expect(bfs.getTree(1,[[1,2],[3,4]]).toString()).toBe([1,2].toString());
  });