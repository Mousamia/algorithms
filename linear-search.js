function linearSearch(searchFor){
    let searchNumber = searchFor;
    const array = [20,34,76,45,09,12];
    for(let i = 0 ; i< array.length ; i++){
        console.log(array[i]);
        if(array[i] == searchNumber){
            return "number found";
        }
       else 
            return "notfound";
    }
    
}

console.log(linearSearch(110));
// Time comlexity
// Best case - O(1)
// Worst case - O(n)
// Average case - O(n)