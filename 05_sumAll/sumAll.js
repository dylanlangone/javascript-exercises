const sumAll = function(start, stop) {
    let result = 0;

    if (!Number.isInteger(start) || !Number.isInteger(stop)) {
        return 'ERROR';
    }

    if (typeof(stop) === 'string') {
        return 'ERROR'
    }

    if (start < 0) {
        return 'ERROR';
    }

    // swap if start > stop
    if (start > stop) {
        let temp = stop;
        stop = start;
        start = temp;
    }
    for (let i = start; i <= stop; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
