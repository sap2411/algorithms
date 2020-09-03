//Given any string, determine if its an anagram of a palidrome

//isPalindromeAnagram("carcare") => true   its an anagram of racecar which is a palindrome

//a palindrome contains every character an even amount of times
//except up to 1 character can appear an odd number of times, because it can be the midpoint of the palidrome

//create hashmap of string, counting occurances. 
//loop through hash values
//If more than one character in the hashmap has an odd vlaue, return false
//otherwise, return true

function isPalindromeAnagram(string){
    let charOccurances = {}
    for(let char of string){
        charOccurances[char] ? charOccurances[char]++ : charOccurances[char] = 1
    }
    let containsLessThanOneOdd
    for(let key in charOccurances){
        if(charOccurances[key] % 2 === 1){
            if(!containsLessThanOneOdd) containsLessThanOneOdd = true
            else return false
        } 
    }
    return true
}

console.log(isPalindromeAnagram("raecar"))

//BigO = O(n)