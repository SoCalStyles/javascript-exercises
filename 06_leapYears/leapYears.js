const leapYears = function(year) {

year = +(year);
// function that determines whether or not a given year is a leap year

// divisible by 4, but not by 100 unless divisible by 400

if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400 === 0) {
        return true;
    } else if (year % 100 !== 0) {
        return true;
    } else if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
} else {
    return false;
}
};

// Do not edit below this line
module.exports = leapYears;
