//given a matrix, print out the numbers in the following order
// [[1, 2, 3, 4],
// [12,13,14,5],
// [11,16,15,6],
// [10,9, 8, 7]];
// end result: 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16

//the matrix can be any size and has to be unrolled in the same way
//the values do not matter
//use recursion

//The matrix needs to be unrolled by printing top to right to bottom to left side.
//this process needs to be repeated until the matrix is empty
//the matrix could be 2x2 and that would only allow the top left and bottom to be printed. leaving out the right.

//I will create a function that takes in the matrix and a 'side' argument
//i will default the 'side' argument to = 'top' as top is the first side to be printed
//Since I'll use recurison, I'll start with a end case. If the matrix is empy, return
//then I will create a switch statement on the 'side' argument
//the cases will be 'top' 'right' 'bottom' 'left'
//'top' will shift the first array off, log values, and run the function with side = 'right'
//'right' will pop each inner array value off, log it, and run the function again with side = 'bottom'
//'bottom' will pop the last array off the matrix, loop backwards through the array, print each value, and run the funciton again with side = 'left'
//'left' will shift every inner array value, log it, and run the function again with side = 'top'

function unroll(matrix, side = "top") {
    if(!matrix.length){
      return
    }
    switch(side){
      case "top":
        let array = matrix.shift()
        for(let num of array){
          console.log(num)
        }
        unroll(matrix, "right")
        break;
      case "right":
        matrix.forEach(arr => console.log(arr.pop()))
        unroll(matrix, "bottom")
        break;
      case "bottom":
        let arr = matrix.pop()
        for(let i = arr.length-1; i >=0 ; i--){
          console.log(arr[i])
        }
        unroll(matrix, "left")
        break;
      case "left":
        for(let i = matrix.length-1; i >=0 ; i--){
          console.log(matrix[i].shift())
        }
        unroll(matrix, "top")
        break;
    }
}