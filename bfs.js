//function to return a tree from the given edges with root node 1
const input2 = [
    [4,5],[5,3],[1,5],[2,1]
]
const input3 = [
    [4,5],[5,3],[1,5],[2,5]
]
const input = [
    [1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[5,8]
]


const list = [];
//iterate through the array and get the immediate children of 1
function getTree(root) {

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
         findStack(stack);
    return [1, ...list];
}
const findStack = (stack2) => {
    //console.log(stack2)
    while (stack2.length > 0) {
        //stack initially contains 5 and 2
        const curr = stack2.pop() //gives me 5 on first run
        list.push(curr);
        getTree(curr);
    }
}


console.log(getTree(1))