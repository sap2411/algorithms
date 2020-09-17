return a flattened array

//[1,[[2]],3,[4,[5]]] => [1,2,3,4,5]

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }