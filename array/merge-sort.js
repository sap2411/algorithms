function findMinAndRemoveSorted(arr){
    return arr.shift()
}

function merge(arr1, arr2){
    let sorted = []
    while (arr1.length > 0 && arr2.length > 0){
        arr1[0] < arr2[0] ? sorted.push(findMinAndRemoveSorted(arr1)) : sorted.push(findMinAndRemoveSorted(arr2))
    }
    return sorted.concat(arr1).concat(arr2)
}

function mergeSort(array){
    let midpoint = array.length/2
    if(array.length < 2){
      return array
    } else {
      return merge(mergeSort(array.slice(0, midpoint)), mergeSort(array.slice(midpoint, array.length)))
    }
}