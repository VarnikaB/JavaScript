/*
Reassign a value to a constant will silently fail while redeclaring the constant will throw an error.
*/
const foo = 'foo';
// foo = 'bar';  Silently fails, foo is still equal to 'foo'
console.log(foo);
{
    const foo = 'bar'; // TypeError, foo has already been defined
    // If defined outside scope will show redeclaration error
    console.log(foo);
}

/*
However constants are not immutable, therefore the properties of non-primitive values defined as a constant 
may be manipulated freely.
*/
const dict = {a: 1};
dict.a = 2;
dict.a; // 2
console.log(dict);