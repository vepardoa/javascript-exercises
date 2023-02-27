const sumAll = function(n1, n2) {

    if (typeof(n1) != 'number'|| typeof(n2) != 'number') return "ERROR";
    if (n1<0 || n2<0 ) return "ERROR";
    
    let sum = 0;
    if(n1>n2){
        max = n1;
        min = n2;
    }
    else{
        max = n2;
        min = n1;
    } 
    for(let i=min; i<=max; i++) sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
