//given an array and a Float
//determine if there is a pair of numbers in the array whos average 
//equals the float

//avPair([1,2,3], 2.5) => true
//avPair([2,6,9], 8.5) => false

function averagePair(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let left = 0
    let right = arr.length-1
    let test
    while(left<right){
        test = (arr[left]+arr[right])/2
        if(test === num) return true
        else if (test>num) right--
        else left++
    }
    return false
  }