const repeatString = function(string, n) {
    if (n < 0) {
        return "ERROR";
    }
    let output = '';
    for (i = 0; i < n; i++) {
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
