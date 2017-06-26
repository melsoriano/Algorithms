var unsortedArr = [5, 7, 65, 2, 12, 3];

function selectionSort(array) {
  var maxNum = [array[0]];
  if (array.length === 1) {
    return array;
  }
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= maxNum) {
      maxNum = [array[i]];
    }
  }
  maxNum = array.splice(array.indexOf(maxNum[0]), 1);
  return selectionSort(array).concat(maxNum);
}


console.log(selectionSort(unsortedArr));