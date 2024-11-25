function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const leftArr = mergeSort(arr.slice(0, mid));
    const rightArr = mergeSort(arr.slice(mid));
  
    return merge(leftArr, rightArr);
  }
  
  function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        // deleted first element and pusing the shifted element to sorted arr
        sortedArr.push(leftArr.shift()); 
      } else {
        sortedArr.push(rightArr.shift());
      }
    }
    // concat arrs if after mergeing remains any arr numbers without compering
    return sortedArr.concat(leftArr, rightArr); 
                                 
  }
  
  const arr = [8, 29, -2, 4, 3];
  console.log(mergeSort(arr));