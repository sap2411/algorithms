//determine in any number of arguments if a duplicate exists

function duplicates(){
    return new Set(arguments).size !== arguments.length;
}