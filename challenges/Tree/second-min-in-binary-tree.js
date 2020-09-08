// Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

// Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.

// If no such second minimum value exists, output -1 instead.

// Example 1:

// Input: 
//     2
//    / \
//   2   5
//      / \
//     5   7

// Output: 5
// Explanation: The smallest value is 2, the second smallest value is 5.
 

// Example 2:

// Input: 
//     2
//    / \
//   2   2

// Output: -1
// Explanation: The smallest value is 2, but there isn't any second smallest value.

var findSecondMinimumValue = function(root) {
    if (!root.left) return -1
    let arr = lister(root, [root.val])
    return arr[1] ? arr[1] : -1
};




function lister(node, memo){
    if(!memo[1] && memo[0] !== node.val){
        node.val < memo[0] ? memo.unshift(node.val) : memo.push(node.val)
    }else if(node.val !== memo[0] && node.val !== memo[1]){
            if(node.val < memo[0]){
                memo[1] = memo[0]
                memo[0] = node.val
            }
            else if(node.val > memo[0] && node.val < memo[1]) memo[1] = node.val 
    }
    if(node.left){
        lister(node.left, memo)
        lister(node.right, memo)
    }
    return memo
}