/*
Functions represented as arrows
*/

/* function add(a, b){
    return a + b;
    
}*/

var add = (a,b) => a+b; 
console.log(add(2,3));

// if instead of a + b there are multiple statements enclose in {}
var multiple = s => {
    s = s % 2;
    if(s != 0)
        return "Odd";
    else
        return "Even";
  }
console.log(multiple(4));

// When there is only single arrgument
var even = n => n % 4;
console.log(even(21));

//when no arguments
var random = () => Math.random();
console.log(random());