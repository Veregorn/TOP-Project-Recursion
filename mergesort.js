function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) {
        return arr;
    }

    // Recursive call
    let orderedLeftArr = mergeSort(arr.slice(0,arr.length / 2));
    let orderedRightArr = mergeSort(arr.slice(arr.length / 2));

    // Merge ordered arrays
    let i = 0;
    let j = 0;
    let k = 0;
    let mergedArr = [];
    while ((i < orderedLeftArr.length) && (j < orderedRightArr.length)) {
        if (orderedLeftArr[i] <= orderedRightArr[j]) {
            mergedArr[k] = orderedLeftArr[i];
            i++;
        } else {
            mergedArr[k] = orderedRightArr[j];
            j++;
        }
        k++;
    }

    // If we have an array with elements, concat it to 'mergedArr' (only from the index position!!!)
    if (i < orderedLeftArr.length) {
        return mergedArr.concat(orderedLeftArr.slice(i));
    } else if (j < orderedRightArr.length) {
        return mergedArr.concat(orderedRightArr.slice(j));
    } else {
        return mergedArr;
    }
}

// Testing
console.log(mergeSort([6,5,3,1,8,7,2,4]));
console.log(mergeSort([2,4]));
console.log(mergeSort([]));
console.log(mergeSort([6,5,3]));
console.log(mergeSort([6,5,3,1,8,7,2,4,6,5,3,1,8,7,2,4,6,5,3,1,8,7,2,4,6,5,3,1,8,7,2,4]));