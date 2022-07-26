/*
Implement map function without map built in
*/
function map(array, callback_function) {
    const result = [];
    for (let i = 0; i < array.length; i += 1) {      
      result.push(callback_function(array[i]));
    }
    return result;
  }

console.log(map([1, 2, 3, 4, 5], item => item * 2)); // [2, 3, 4, 5, 6]