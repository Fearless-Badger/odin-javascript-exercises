const reverseString = function(string) {
    let result = [];

    if (string.length == 0){
        return '';
    }

    for ( let i = 0 ; i < string.length ; i++ ){
        let char = string.substring(string.length - i , string.length - i-1);
        result.push(char);
    }

    return result.join('');

};

// Do not edit below this line
module.exports = reverseString;
