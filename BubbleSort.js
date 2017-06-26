var unsortedArr = [15, 3, 8, 9, 12, 6, 34, 2];

function bubbleSort(array) {
  var counter = 0;
  var tempArr = [];

  for ( var i = 0; i < array.length; i++ ) {
    if ( array[i] > array[i+1] ) {
      tempArr = array[i];
      array[i] = array[i+1];
      array[i+1] = tempArr;
      counter++;
    }
    if ( counter > 0 ) {
      bubbleSort(unsortedArr);
    }
  }
  return array;
}

console.log('bubbleSort..', bubbleSort(unsortedArr));


function bubbleAgain(array) {
  var swapped = false;
  var tempArr = [];
  do {
    for ( var i = 0; i < array.length; i++ ) {
    if ( array[i] > array[i+1] ) {
      tempArr = array[i];
      array[i] = array[i+1];
      array[i+1] = tempArr;
      swapped = true;
      }
    }
  }
  while(swapped);
  return array;
}

console.log('bubbleAgain..', bubbleAgain(unsortedArr));