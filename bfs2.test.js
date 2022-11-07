const bfs = require('./bfs')

test('passing an empty edges list should return root node 1 itself', () => {
    expect(bfs.getTree(1,[])).toEqual([1]);
  });

