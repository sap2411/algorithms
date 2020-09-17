// find minimum subarray length whos sum is great than or equal to given int


function minSubArrayLen(arr, num){
    if (arr.reduce((a,acc) => acc += a) < num) return 0
    let sub = [arr[0]]
    let sum 
    let ans = arr.length
    let end = 1
    while(end <= arr.length){
        sum = sub.reduce((a,acc) => acc += a)
        if(sum >= num){
            if(sub.length === 1) return 1
            if(sub.length < ans) ans = sub.length
            sub.shift()
        }else{
            sub.push(arr[end])
            end++
        }
        
    }
    return ans
}