const removeFromArray = function(array, ...args) {

    const refArray = [];

    array.forEach((element) => {
        if(!args.includes(element)){
            refArray.push(element);
        }
    });
    

    return refArray;
};

// Do not edit below this line
module.exports = removeFromArray;
