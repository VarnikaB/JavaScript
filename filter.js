/*
Implement filter function without map built in
*/
function filter(array, callback_function) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback_function(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(filter([1, 2, 3, 4, 5], item => item >= 4)); // [4, 5]