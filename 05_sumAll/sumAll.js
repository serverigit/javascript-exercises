// sum of a, ..., b = n.(a+b)/2
    // n = a - b + 1


// const sumAll = function(num1, num2) {
//     if (Number.isInteger(num1) && Number.isInteger(num2) && !isNaN(num1) && !isNaN(num2)) {
//         if (num1 < 0 || num2 < 0) {
//             return `ERROR`;
//         }
//         else if (num1 < num2) {
//             const n = num2 - num1 + 1;
//             const sum = (n * (num1+num2)) / 2;
//             return sum;
//         }
//         else {
//             const n = num1 - num2 + 1;
//             const sum = (n * (num1+num2)) / 2;
//             return sum;
//         }
//     }
//     else {
//         return `ERROR`;
//     }
// };

const sumAll = function(num1, num2) {
    if (Number.isInteger(num1) && Number.isInteger(num2) && num1 >= 0 && num2 >= 0) {
        if (num1 > num2) {
            [num1, num2] = [num2, num1];
        }
        const n = num2 - num1 + 1;
        const sum = (n * (num1+num2)) / 2;
        return sum;
    }
    else {
        return `ERROR`;
    }
};

// Do not edit below this line
module.exports = sumAll;
