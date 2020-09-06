// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Example 1:

// Input: [1,3,5,6], 5
// Output: 2
// Example 2:

// Input: [1,3,5,6], 2
// Output: 1
// Example 3:

// Input: [1,3,5,6], 7
// Output: 4
// Example 4:

// Input: [1,3,5,6], 0
// Output: 0

var searchInsert = function(nums, target) {
    if(nums[0] >= target) return 0
    if(nums[nums.length-1] < target) return nums.length
    let last = nums.length-1
    let first = 0
    let midpoint = Math.round((last+first)/2)
    while(true){
        if(nums[midpoint] === target) return midpoint
        else if(nums[midpoint] < target){
            if(nums[midpoint+1] >= target) return (midpoint+1)
            first = midpoint
            midpoint = Math.round((last+first)/2)
        }else{
            last = midpoint
            midpoint = Math.floor((last+first)/2)          
        }
    }
};