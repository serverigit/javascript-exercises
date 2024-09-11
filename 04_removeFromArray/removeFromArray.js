// const removeFromArray = function(arrayInput, args) {
//     arrayInput.splice(arrayInput.indexOf(args), 1);
//     return arrayInput;
// };

const removeFromArray = function(arrayInput, ...args) {
    args.forEach((element) => {
        const index = arrayInput.indexOf(element);
        if (index !== -1) {
            while (arrayInput.includes(element)) {
                arrayInput.splice(index, 1);
            }
        }
    });
    return arrayInput;
};

// Do not edit below this line
module.exports = removeFromArray;
