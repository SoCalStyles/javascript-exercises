const reverseString = function(input) {
    let splitInput = input.split('');
    let reverseArray = splitInput.reverse();
    let newInput = reverseArray.join('');
    return newInput;
};


// Do not edit below this line
module.exports = reverseString;
