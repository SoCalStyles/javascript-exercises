/* Create a variable to hold the string you're going to return,
create a loop that repeats the given number of times and 
add the given string to the result on each loop. */

const repeatString = function(word, number) {
    let num = +(number);
    let message = "";
    if (num < 0) {
        message = 'ERROR';
    } else {
    for (let i = 0; i < num; i++) {
        message += `${word}`;
    }
    }
return message;   
};

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('', 10);



// Do not edit below this line
module.exports = repeatString;
