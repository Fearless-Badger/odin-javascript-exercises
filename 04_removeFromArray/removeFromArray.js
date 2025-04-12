const removeFromArray = function(array, ...nums_to_delete) {
    console.log(array);
    console.log(nums_to_delete);

    for ( let i = 0; i < array.length ; i++ ){
        for ( num of nums_to_delete){
            if (array[i] === num){
                array.splice(i, 1);
                i--;
            }
        }
    }

    return array;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));

// Do not edit below this line
module.exports = removeFromArray;
