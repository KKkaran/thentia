// //function to return a tree from the given edges with root node 1

const list = [];
//iterate through the array and get the immediate children of 1
function getTree(root,input) {
    //input = inp;
    const stack = [];
    for (let i in input) {
        if (input[i] !== null) {
            if (input[i].includes(root)) {
            //get the other vertex of the edge 
                if (input[i].indexOf(root) == 0) stack.push(input[i][1])
                else stack.push(input[i][0])
                input.splice(i, 1, null);
            }
        }
    }
    findStack(stack,input);
    return [1, ...list];
}
const findStack = (stack2,input) => {
    //console.log(stack2)
    while (stack2.length > 0) {
        //stack initially contains 5 and 2
        const curr = stack2.pop() //gives me 5 on first run
        list.push(curr);
        getTree(curr,input);
    }
}
//console.log(getTree(1,[[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[4,10],[8,9]]).toString())
module.exports = {
    getTree
}