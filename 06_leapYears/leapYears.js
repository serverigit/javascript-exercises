// A leap year: 
// can't be divisible by 100
// UNLESS it is divisible by 400.
// must be divisible by 4. 

// Returns year as true or false

// const leapYears = function(year) {
//     year % 100 === 0 && year % 400 === 0 ? year = true :
//     year % 100 === 0 ? year = false : 
//     year % 4 === 0 ? year = true: 
//     year = false;
//     return year;
// };

// Directly returns true or false

const leapYears = function(year) {
    if (year % 100 === 0 && year % 400 === 0) return true;
    if (year % 100 === 0) return false;
    if (year % 4 === 0) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
