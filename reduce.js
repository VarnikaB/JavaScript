/*
Implement reduce function without map built in
*/
function reduce(array, callback_function, initialValue) {
    let result = initialValue;
    for (let i = 0; i < array.length; i += 1) {
      result = callback_function.call(undefined, result, array[i]);
    }
    return result;
  }
console.log(reduce([1, 2, 3, 4, 5], 
    (result, item) => {
        result.push(item * 2);
        return result;
      }, 
    [1]));