/*
Testing the scope of variable
*/
y = 10;
let x = 20;
{
    let z = 12; // if var instead of let then line 16 has no error as it becomes global variable
    let y = 30;
    console.log("y = "+ y); //30
    console.log("x = " + x); //20
    console.log("z = "+ z); //12
}

console.log("x = " + x); //20
console.log("y = "+ y); //30
console.log("z = "+ z); //shows error as z is defined only in the above scope