// removes arguments from array
const removeFromArray = function() {
    result = []
    arr = arguments[0];
    for (let i = 0; i < arr.length; i++) {
        let skip = false;
        for (let j = 1; j < arguments.length; j++) {
            if (arr[i] === arguments[j]) {
                skip = true;
            }
        }
        if (skip) {
            continue;
        }
        result.push(arr[i]);
    }
    // console.log("result: " + result)
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
