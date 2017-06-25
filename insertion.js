var unsortedArr = [9, 3, 87, 4, 1, 7, 10];


function insertion(array) {

  for(var i = 1; i < array.length; i++) {
    var temp = array[i];
    for(var k = i - 1; k >= 0 && array[k] > temp; k--) {
      array[k+1] = array[k];
    }
    array[k+1] = temp;
  }
  return array;
}

console.log(insertion(unsortedArr));