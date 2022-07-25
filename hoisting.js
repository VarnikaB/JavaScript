/*
Unlike var declarations which are hoisted to the top of their enclosing scope let and const declarations may only be 
accessed after they've been declared. let and const variables are said to be in the scope's TDZ (temporal dead zone) 
before they've been declared, and any attempt to read or write them beforehand will generate an error.
*/
{
    foo = 'foo';
    console.log(foo); // 'foo'

    bar = 'bar';     
    console.log(bar); // ReferenceError: bar is in the 'TDZ'
    
    var foo;
    let bar; // bar and const cannot be hoisted
}

//Hoisting of arrow functions
add = (a,b) => a + b;
console.log(add(20,30));
var add;
