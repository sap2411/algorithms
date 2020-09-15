// given an array and an array length
// find the max sum of a subarray from the array with the given array length

// maxSubarray([1,2,3,4], 2) => 7 
// maxSubarray([100,2], 4) => null
// maxSubarray([17,-2,34,-6,100,-1,51], 3) => 150

function maxSubarraySum(arr, len){
    if(len > arr.length) return null
    let subArr = arr.slice(0, len)
    let sum = subArr.reduce((a, acc)=> acc+=a)
    let maxSum = sum
    for(let ind = 1; ind<=(arr.length-len); ind++){
        sum = (sum - arr[ind-1]) + arr[(ind+len-1)]
        if(sum > maxSum) maxSum = sum
    }
    return maxSum
}
