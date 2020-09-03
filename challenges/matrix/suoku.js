//given an NxN matrix, determine if its valid.
//it can be considered valid if every row and comlumn contain exactly 1..N
//in a 3x3 matrix a valid one could look like:
//[[1,2,3],
// [2,3,1],
// [3,1,2]]
//The above amtrix is valid because every row and column each contain every number between 1 and N

//the following is invalid:
//[[1,2,3],
// [2,1,3],
// [3,4,2]]
//this is invalid because only one of the columns and two of the rows contain every number between 1..N
//and 4 is not between 1 and n

//I will nested loop through the arrays of the matrix
//with every outer loop I will initialize 2 hashMaps.
//one hash map will store values vertically, the other will store horizontal values.
//if a value appears in a hashmap more than once, is less than 1, or greater than N, I return "INVALID"
//if the loops completes, return "VALID"

function checkSubSudoku(matrix) {
  for (let i = 0; i < matrix.length ; i++){
    const horizontalVisited = {}
    const verticalVisited = {}
    let horizontalNode, verticalNode
    for(let j = 0; j < matrix.length; j++){
      horizontalNode = matrix[i][j]
      verticalNode = matrix[j][i]
      if(horizontalVisited[horizontalNode] || verticalVisited[verticalNode] || horizontalNode < 1 || horizontalNode > matrix.length){
        return "INVALID"
      }else{
        horizontalVisited[horizontalNode] = true
        verticalVisited[verticalNode] = true
      }
    }
  }
  return "VALID";
}