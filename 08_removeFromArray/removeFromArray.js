const removeFromArray = function(list, ...items) {
    return list.filter(item => !items.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
