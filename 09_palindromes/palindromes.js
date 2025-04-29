const palindromes = function (str='') {


    let str_arr = str.split("");
    const clean = str_arr.filter( char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || ( char >= "0" && char <= "9") );
    const clean_lower = clean.map( char => char.toLowerCase());
    const reverse = [...clean_lower].reverse();

    for (let i = 0; i < clean_lower.length ; i++ ){
        if ( clean_lower[i] !== reverse[i] ){
            return false;
        }
    }

    return true;

    // let str_arr = str.split("");
    // const clean = str_arr.filter( char => (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9'));
    // const clean_lower = clean.map((char) => char.toLowerCase());
    // const reverse = [...clean_lower].reverse();
    
    // for (let i = 0; i < clean.length; i++ ){
    //     if (clean_lower[i] !== reverse[i]){
    //         return false;
    //     }
    // }

    // return true;

};

// Do not edit below this line
module.exports = palindromes;
