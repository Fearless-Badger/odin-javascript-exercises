const add = function(a=0, b=0) {
  return +(a + b);
};

const subtract = function(a=0, b=0) {
	return +(a - b);
};

const sum = function(arr=[]) {
	return arr.reduce( (sum, cur) => sum + cur , 0);
}

const multiply = function(arr=[]) {
  return arr.reduce( (sum, cur ) => sum * cur, 1);
};

const power = function(a=0, b=0) {
  return a ** b;
};

const factorial = function(a=1) {
	let res = 1;
  for (let i = a; i > 0; i-- ){
    res *= i
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
