// capitalize first letter of every string in the array

function capitalizeFirst (arr, n = arr.length-1) {
    arr[n] = arr[n].charAt(0).toUpperCase() + arr[n].slice(1);
    if(n>0) return capitalizeFirst(arr, n-1)
    return arr
}