const reverseString = function(string) {
    let reversedStr = '';
    const Arr = string.split("");

    for (let i = Arr.length-1; i>=0; i--){
        reversedStr += Arr[i];
    }
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
