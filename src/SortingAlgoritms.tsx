const bubbleSort = (arr: number[]): number[][] => {
  const len = arr.length;
  let arrayStates = [arr];
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
        arrayStates.push([...arr]);
      }
    }
  }
  return arrayStates;
};

const selectionSort = (arr: number[]): number[][] => {
  let arrayStates = [arr];
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        // Choose the lesser of the two:
        min = j;
      }
    }
    // In-place swap:
    const tmp = arr[min];
    arr[min] = arr[i];
    arr[i] = tmp;
    arrayStates.push([...arr]);
  }
  return arrayStates;
};

const insertionSort = (arr: number[]): number[][] => {
  // Iterate the array (0..n)
  let arrayStates = [arr];
  for (let i = 0; i < arr.length; i++) {
    const tmp = arr[i];
    let j = i - 1;
    // Iterate while J is out of place.
    while (j >= 0 && arr[j] > tmp) {
      arr[j + 1] = arr[j];
      let tmpInsert = [...arr];
      tmpInsert[j] = 0;
      arrayStates.push(tmpInsert);
      j--;
    }
    // Assign the correct location of i where j stops.
    arr[j + 1] = tmp;
    arrayStates.push([...arr]);
  }
  return arrayStates;
};

const mergeSort = (arr: number[]): number[][] => {
  //Create two arrays for sorting
  let arrayStates = [[...arr]];
  let sorted = Array.from(arr);
  let n = sorted.length;
  let buffer = new Array(n);

  for (let size = 1; size < n; size *= 2) {
    for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
      //Get the two sub arrays
      let left = leftStart,
        right = Math.min(left + size, n),
        leftLimit = right,
        rightLimit = Math.min(right + size, n);

      //Merge the sub arrays
      merge(left, right, leftLimit, rightLimit, sorted, buffer);
    }

    //Swap the sorted sub array and merge them
    let temp = sorted;
    sorted = buffer;
    buffer = temp;
    arrayStates.push([...sorted]);
  }

  return arrayStates;
};

const merge = (
  left: number,
  right: number,
  leftLimit: number,
  rightLimit: number,
  sorted: number[],
  buffer: number[]
) => {
  let i = left;

  //Compare the two sub arrays and merge them in the sorted order
  while (left < leftLimit && right < rightLimit) {
    if (sorted[left] <= sorted[right]) {
      buffer[i++] = sorted[left++];
    } else {
      buffer[i++] = sorted[right++];
    }
  }

  //If there are elements in the left sub arrray then add it to the result
  while (left < leftLimit) {
    buffer[i++] = sorted[left++];
  }

  //If there are elements in the right sub array then add it to the result
  while (right < rightLimit) {
    buffer[i++] = sorted[right++];
  }
};

const onCallQuickSort = (array: number[]) => {
  let arrayStates = [[...array]];
  quickSort(array, [], []);

  function quickSort(
    initArray: number[],
    metaLeft: number[],
    metaRight: number[]
  ) {
    if (initArray.length <= 1) {
      return initArray;
    } else {
      var left = [];
      var right = [];
      var newArray: number[] = [];
      var pivot: number | undefined = initArray.pop();
      var length = initArray.length;
      if (!pivot) {
        pivot = Number.MIN_VALUE;
      }

      for (var i = 0; i < length; i++) {
        if (initArray[i] <= pivot) {
          left.push(initArray[i]);
        } else {
          right.push(initArray[i]);
        }
      }

      arrayStates.push(
        ([] as number[]).concat(metaLeft, left, pivot, right, metaRight)
      );
      var sortedLeft: number[] = quickSort(
        left,
        metaLeft,
        [pivot].concat(right, metaRight)
      );
      var sortedRight: number[] = quickSort(
        right,
        metaLeft.concat(sortedLeft, pivot),
        metaRight
      );
      return newArray.concat(sortedLeft, pivot, sortedRight);
    }
  }

  return arrayStates;
};

const cocktailShakerSort = (arr: number[]): number[][] => {
  let arrayStates = [[...arr]];
  //Start and end is used to keep track of where the beginning and the end of the array is at
  //to determine where needs to be checked for sorting
  //Swapped is our conditional to check if everything is sorted
  let start = 0,
    end = arr.length,
    swapped = true;

  while (swapped) {
    //Setting the flag to false, in case it is true from the previous iteration
    swapped = false;

    //Bubble sort from the left side of the array to the right, moving the largest.
    for (let i = start; i < end - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        arrayStates.push([...arr]);
      }
    }

    //This is to update the end, so that next iteration, we don't have to check this index.
    end--;

    //If everything is already sorted, we can break out of the loop early.
    if (!swapped) {
      break;
    }

    //Setting the flag to false, so it can be used for the next phase
    swapped = false;

    //Reverse Bubble sort, moving the smallest to the front.
    for (let i = end - 1; i > start; i--) {
      if (arr[i - 1] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[i - 1];
        arr[i - 1] = temp;
        swapped = true;
        arrayStates.push([...arr]);
      }
    }

    //This is to update the beginning, so that next iteration, we don't have to check this index.
    start++;
  }

  return arrayStates;
};

export {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSort,
  onCallQuickSort,
  cocktailShakerSort,
};
