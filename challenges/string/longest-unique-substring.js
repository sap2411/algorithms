// find length of longest substring containing uniq characters

function findLongestSubstring(string){
    // add whatever parameters you deem necessary - good luck!
    let subString = ""
    let count = 0
    let ans = 0
    for(let char = 0; char < string.length; char++){
        if(!subString.includes(string.charAt(char))){
            subString = subString + string.charAt(char)
            count = subString.length
            if(subString.length > ans) ans = subString.length
        }else{
            subString = popper(subString, string.charAt(char)) + string.charAt(char)
        }
    }
    return ans
  }
  
  function popper(str, char){
      if(str.includes(char)){
          return popper(str.slice(1), char)
      }
      return str
  }