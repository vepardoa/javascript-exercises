const repeatString = function(string, num) {
    let str = '';

    if(num>=0){
        for(i=0; i<num; i++){
            str += string;
        }
    } else {
        return "ERROR";
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
