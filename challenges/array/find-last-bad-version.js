// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

// Example:

// Given n = 5, and version = 4 is the first bad version.

// call isBadVersion(3) -> false
// call isBadVersion(5) -> true
// call isBadVersion(4) -> true

// Then 4 is the first bad version. 

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(isBadVersion(1) === true) return 1
        if(isBadVersion((n-1)) === false) return n
        let low = 1
        let high = n
        let mid = Math.floor((n+1)/2)
        while(true){
            if(isBadVersion(mid) === true){
                if(isBadVersion(mid-1) === false)return mid
                high = mid-1
                mid = Math.floor((high+low)/2)
            } else{
                if(isBadVersion(mid+1) === true) return (mid+1)
                low = mid+1
                mid = Math.round((high+low)/2)
            }
        }
    };
};