//Given an unsorted array of integers, find the length of longest increasing subsequence.
//
//Example:

//Input: [10,9,2,5,3,7,101,18]
//Output: 4 
//Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
//Note:

//There may be more than one LIS combination, it is only necessary for you to return the length.
//Your algorithm should run in O(n2) complexity.
//Follow up: Could you improve it to O(n log n) time complexity?

function lengthOfLIS(arr){
    let length = arr.length
    if(length === 0) return 0
    const dp = [1]
    let ans = 1
    let n = 1
    for(let i = 1; i < length; i++){
      let max = 0 
      for(let nested = 0; nested < n; nested++){
        if(arr[i] > arr[nested]){
          if(dp[nested] > max) max = dp[nested]
          dp[i] = max + 1
        }
      }
      if(n < length) n++
      if(dp[i] === undefined) dp[i] = 1
      if(dp[i] > ans) ans = dp[i]
    }
    return ans
}

let arr = [10,9,2,5,3,7,101,18]
