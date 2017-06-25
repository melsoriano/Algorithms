var unsortedArr = [6, 4, 5, 7, 98, 23, 13];

// basic implementation (pivot is the first element of the array)
function quickSort(array) {
  var pivot = array[0];
  var left = [];
  var right = [];

  if(array.length < 1) {
    return array;
  }

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(unsortedArr.slice()));