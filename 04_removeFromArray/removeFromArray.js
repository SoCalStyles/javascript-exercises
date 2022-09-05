const removeFromArray = function(array, ...args) {
    let newArray = [];
    firstLoop: for (item of array) {
        secondLoop: for (thing of args) {
            if (thing === item) {
                continue firstLoop;
            } 
        }
    newArray.push(item);   
    }


return newArray;
}
   




// Do not edit below this line
module.exports = removeFromArray;
