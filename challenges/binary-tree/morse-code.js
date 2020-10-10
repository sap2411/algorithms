class Node 
{ 
    constructor(data) 
    { 
        this.data = data; 
        this.left = null; 
        this.right = null; 
    } 
}

class BinaryTree 
{ 
    constructor(node) { 
        this.root = node; 
    }

    decode(morse){
        morse = morse.split(' / ') //['... .- --', '... .. .']
        let message = ''
        for(let word of morse){
            let chars = word.split(' ') //['...', '.-', '--']
            let decoded = ''
            for(let char in chars){   // '...'  
                let node = this.root
                for(let symb in chars[char]){ // '.' '.' '.'
                    if(chars[char][symb] === "-") node = node.right
                    else if(chars[char][symb] === '.') node = node.left
                    else console.log('error')
                }
                decoded = decoded + node.data
            }
            message = message + decoded + " "
        }
        return message
    }
}

let head = new Node(null)
head.left = new Node('e')
head.left.left = new Node('i')
head.left.left.left = new Node("s")
head.left.left.left.left = new Node("h")
head.left.left.left.left.left = new Node("5")
head.left.left.left.left.right = new Node("4")
head.left.left.left.right = new Node("v")
head.left.left.left.right.right = new Node("3")
head.left.left.right = new Node("u")
head.left.left.right.left = new Node("f")
head.left.left.right.right = new Node("u")
head.left.left.right.right.right = new Node("2")
head.left.right = new Node('a')
head.left.right.left = new Node("r")
head.left.right.left.left = new Node("l")
head.left.right.left.left.right = new Node("e")
head.left.right.left.right = new Node("a")
head.left.right.right = new Node("w")
head.left.right.right.left = new Node("p")
head.left.right.right.right = new Node("j")
head.left.right.right.right.right = new Node("1")

head.right = new Node('t')
head.right.left = new Node('n')
head.right.left.left = new Node("d")
head.right.left.left.left = new Node("b")
head.right.left.left.left.left = new Node("6")
head.right.left.left.left.right = new Node("=")
head.right.left.left.right = new Node("x")
head.right.left.left.right.left = new Node("/")
head.right.left.right = new Node("k")
head.right.left.right.left = new Node("c")
head.right.left.right.right = new Node("y")

head.right.right = new Node('m')
head.right.right.left = new Node("g")
head.right.right.left.left = new Node("z")
head.right.right.left.left.left = new Node("7")
head.right.right.left.right = new Node("q")
head.right.right.right = new Node("o")
head.right.right.right.left = new Node("o")
head.right.right.right.left.left = new Node("8")
head.right.right.right.right = new Node("ch")
head.right.right.right.right.right = new Node("0")
head.right.right.right.right.left = new Node("9")

let tree = new BinaryTree(head)
// console.log(tree.decode('.. / -... ..- .. .-.. - / .- / -- --- .-. ... . / -.-. --- -.. . / -.. . -.-. --- -.. . .-.'))
function maxSum(arr){
    let owned = false
    let profit = 0
    for(var ind = 0; ind < arr.length-1; ind++){
        if(arr[ind] < arr[ind+1]){
            if(!!owned) console.log('hold')
            else {
                owned = arr[ind]
                console.log('buy', arr[ind])
            } 
        }
        else if(arr[ind] > arr[ind+1] && !!owned){
            profit += (arr[ind] - owned)
            console.log('sell', owned, 'for', arr[ind], profit)
            owned = false
        }
    }
    if(!!owned)profit += (arr[ind] - owned)
    console.log('sell', owned, 'for', arr[ind], profit)
    return profit
}
// console.log(maxSum([100, 180, 260, 310, 40, 535, 695]))

function maxSubMatrix(matrix, sub){
    if(matrix.length===0 || sub===0 || sub > matrix.length) return 0
    let subTotals = new Array(matrix.length-sub)
    for(let count in subTotals){
        subTotals[count] = new Array(matrix.length)
    }
    let max = 0
    let total
    let columns = sub
    for(let down = 0; down < sub && count-sub<matrix.length; down++){
        for(let across = 0; across < sub && inc-across< matrix.length; across++){
            total = 0
            for(let add = down; add < sub+down; add++){
                total += matrix[add][across]
            }
        }
        // count++
        // if
        // sub[down]
    }
}

// An efficient Java program to find maximum sum  
// sub-square matrix  
  
// Class to store the position of start of  
// maximum sum in matrix 
// class Position { 

  
//     // Constructor 
//     constructor( x,  y) { 
//         this.x = x; 
//         this.y = y; 
//     } 
  
//     // Updates the position if new maximum sum 
//     // is found 
//     updatePosition( x,  y) { 
//         this.x = x; 
//         this.y = y; 
//     } 
  
//     // returns the current value of X 
//     getXPosition() { 
//         return this.x; 
//     } 
  
//     // returns the current value of y 
//     getYPosition() { 
//         return this.y; 
//     } 
// } 
  
class Gfg { 
    // Size of given matrix 
  
    // A O(n^2) function to the maximum sum sub- 
    // squares of size k x k in a given square 
    // matrix of size n x n 
    static printMaxSumSub(mat, k) { 
        const N = mat.length
        
        if (k > N || k===0 || N===0) return; 
  
        //create array to hold vertical k sums. array mus be (mat.length-k)+1 x mat.length
        let stripSum = new Array((mat.length-k)+1);

        for(let count=0; count < stripSum.length;count++){
            stripSum[count] = new Array(mat.length)
        } 

        // Go column by column and colculate every k column sum
        for (let j = 0; j < N; j++) { 
  
            // Calculate sum of first k x 1 rectangle in this column
            //so we can easily update as we move further vertical sections
            let sum = 0; 
            for (let i = 0; i < k; i++) sum += mat[i][j];
            stripSum[0][j] = sum; 
  
            // Calculate sum of remaining rectangles
            //by moving down 1, subtracking the difference of previous first node and current last 
            for (let i = 1; i < N - k + 1; i++) { 
                sum += (mat[i + k - 1][j] - mat[i - 1][j]); 
                stripSum[i][j] = sum; 
            } 
        } 
  
        // max_sum stores maximum sum and its 
        // position in matrix 
        let max_sum = 0; 
        let pos = [-1, -1]; 
  
        // 2: CALCULATE SUM of Sub-Squares using stripSum to add k-columns togetehr
        for (let i = 0; i < N - k + 1; i++) { 
            // Calculate and print sum of first subsquare 
            // in this row 
            let sum = 0; 
            for (let j = 0; j < k; j++) sum += stripSum[i][j]; 
  
            // Update max_sum and position of result 
            if (sum > max_sum) { 
                max_sum = sum; 
                pos = [i, 0]; 
            } 
  
            // Calculate sum of remaining squares in 
            // current row by removing the leftmost 
            // strip of previous sub-square and adding 
            // a new strip 
            for (let j = 1; j < N - k + 1; j++) { 
                sum += (stripSum[i][j + k - 1] - stripSum[i][j - 1]); 
  
                // Update max_sum and position of result 
                if (sum > max_sum) { 
                    max_sum = sum; 
                    pos = [i, j];  
                } 
            } 
        } 
  
        // Print the result matrix 
        let total = 0
        for (let i = 0; i < k; i++) { 
            for (let j = 0; j < k; j++) { 
                console.log(mat[i + pos[0]][j + pos[1]] + " "); 
                total+=(mat[i + pos[0]][j + pos[1]])
            } 
        } 
        return(total); 
    } 
  
    // Driver program to test above function 
    static main(args) { 
        let mat = [ [ 1, 2, -1, 4],  
                [ -8, -3, 4, 2],  
                [ 3, 8, 10, -8],  
                [ -4, -1, 1, 7]]; 
        let k = 3; 
  
        console.log("Maximum sum 3 x 3 matrix is"); 
        return this.printMaxSumSub(mat, k); 
    } 
} 

// console.log(Gfg.main())
function run(arr){
    if(!arr.length) return 0

    arr = arr = arr.sort((first, second) => {
        if(second[0] !== first[0]) return first[0] - second[0]
        else if (second[1] !== first[1]) return first[1] - second[1]
        else return first[2] - second[2]
    })
    return weightedJob(arr)
}

function weightedJob(arr, total=0){
    let alt
    for(let count = 1; count < arr.length; count++){
        if(arr[count][0] < arr[0][1]) alt = weightedJob(arr.slice(1), total)
    }
    total += arr[0][2]
    let ind = 1
    let other
    let track = 0
    while(ind < arr.length){
        if(arr[ind][0] >= arr[track][1]){
        total += arr[ind][2]
        track = ind
        }else{
            other = weightedJob(arr.slice(0,track).concat(arr.slice(track+1, arr.length)))   
        }
        ind++
    }
    console.log(total, other, alt)
    if(other > total) total = other
    if(alt > total) total = alt
    console.log(arr)
    return total
}

// console.log([[0,2,50],[1,2,75],[2,3,10],[0,1,20],[3,4,15],[2,4,100]].sort((first, second) => {
//     if(second[0] !== first[0]) return first[0] - second[0]
//     else if (second[1] !== first[1]) return first[1] - second[1]
//     else return first[2] - second[2]
// }))
// console.log(run([[0,2,50],[1,2,75],[2,3,10],[0,1,20],[3,4,15],[2,4,100]]))

 
// Find the latest job (in sorted array) that doesn't 
// conflict with the job[i] 
function latestNonConflict(arr = [], i){ 
    for (let j=i-1; j>=0; j--){ 
        if (arr[j][1] <= arr[i][0]) return j;
    } 
    return -1; 
} 
  

function findMaxProfit( arr = [], n) { 
    // Create an array to store solutions of subproblems.  table[i] 
    // stores the profit for jobs till arr[i] (including arr[i]) 
    let table = new Array(n); 
    table[0] = arr[0][2]; 
    table[n] = 0
  
    // Fill entries using recursive property 
    console.log(arr)
    for (let i=1; i<n; i++){ 
        // Find profit including the current job 
        console.log(arr[i])
        let inclProf = arr[i][2]; 
        let l = latestNonConflict(arr, i);
        console.log(arr[l]) 
        if (l != -1) inclProf += table[l]; 
        
        // Store maximum of including and excluding
        if(arr[i-1][1] <= arr[i][0]) table[i] = Math.max(inclProf, table[i-1]); 
        else table[i] = inclProf
        if(table[i] > table[n]) table[n] = table[i]
        console.log(table)
    } 
    
    // Store result and free dynamic memory allocated for table[] 
    
    console.log(table)
    return table[n]; 
} 
  
// Driver program 
function main() { 
    let arr = [[0,4,50],[1,2,20],[3,4,10],[0,1,20],[4,5,15],[3,5,100]]; 
    arr = arr.sort((first, second) => {
        if(second[0] !== first[0]) return first[0] - second[0]
        else if (second[1] !== first[1]) return first[1] - second[1]
        else return first[2] - second[2]
    })
    let n = arr.length; 
    console.log("The optimal profit is ", findMyMaxProfit(arr, n)); 
} 
main()

function findMyMaxProfit(arr, n){
    if(n === 0) return 0
    let table = new Array(n+1)
    table[0] = arr[0][2]
    table[n] = arr[0][2]
    for(let ind = 1; ind < arr.length; ind++){
        let profit = arr[ind][2]
        let prevTotalJobProfit = findPreviousJob(arr, ind, table)
        profit += prevTotalJobProfit
        table[ind] = profit
        if(profit > table[n]) table[n] = profit
    }
    return table[n]
}

function findPreviousJob(arr, ind, table){
    for(j = ind-1;j>=0;j--){
        if(arr[j][1] <= arr[ind][0]) return table[j]
    }
    return 0
}