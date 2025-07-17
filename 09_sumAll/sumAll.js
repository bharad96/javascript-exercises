const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end) || 
        start < 0 || end < 0 ){
        return 'ERROR';
    }
    function* generateNumbers(start, end) {
        for (var i = start; i <= end; i++) {
            console.log(i);
            yield i;
        }
    }
    [start, end] = [Math.min(start, end), Math.max(start, end)];
    return generateNumbers(start, end).reduce((prev, curr) => prev + curr);
};

// Do not edit below this line
module.exports = sumAll;
