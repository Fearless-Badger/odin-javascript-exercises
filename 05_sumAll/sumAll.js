const sumAll = function(start, end) {
    if (typeof(start) != "number" || typeof(end) != "number"){
        return "ERROR";
    }
    else if (!Number.isInteger(start) || !Number.isInteger(end)){
        return "ERROR";
    }
    else if (start < 0 || end < 0){
        return "ERROR";
    }
    
    // Function expects start to be the first arg. If it's not, the args are swapped
    if (start > end){
        let temp = start;
        start = end;
        end = temp;
    }
    
    let sum = 0;
    for ( let i = start; i <= end; i++){
        sum += i;
    }
    return sum;



};

// Do not edit below this line
module.exports = sumAll;
