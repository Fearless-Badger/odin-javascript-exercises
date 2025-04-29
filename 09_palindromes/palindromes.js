const palindromes = function (str='') {


    let str_arr = str.split("");
    const clean = str_arr.filter( char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || ( char >= "0" && char <= "9") );
    const clean_lower = clean.map( char => char.toLowerCase());
    const reverse = [...clean_lower].reverse();

    return clean_lower.join("") === reverse.join("");

};

// Do not edit below this line
module.exports = palindromes;
