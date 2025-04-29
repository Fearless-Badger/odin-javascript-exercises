const fibonacci = function(num) {
    let idx = +(num);

    if (typeof( idx ) !== "number" || idx < 0){
        return "OOPS";
    }

    if (idx === 0 ){
        return 0;
    } 
    else if (idx === 1){
        return 1;
    }
    

    let res = 1;
    let last = 1;
    let temp;
    for ( let i = 2 ; i < idx ; i++ ){
        temp = res;
        res += last;
        last = temp;
    }

    return res;

};

// Do not edit below this line
module.exports = fibonacci;
