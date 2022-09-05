const sumAll = function(a, b) {
    let sum = 0;
    if (a !== +(a) || b !== +(b)) {
        return 'ERROR';
    }
    if ((a >= 0) && (b >= 0)){
        if (a < b) {
            for (let i = 0; i <= b; i++) {
                if (i >= a && i <= b) {
                sum += i;
                }
        } 
        } else if (a > b) {
            for (let i = 0; i <= a; i++) {
                if (i <= a && i >= b) {
                sum += i;
                }
        }
    }
    } else {
        return 'ERROR';
    }
return sum;    
};

// Do not edit below this line
module.exports = sumAll;
