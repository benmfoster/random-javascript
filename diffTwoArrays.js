function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {}
        else {
            newArr.push(arr1[i]);
        };
      }
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {}
        else {
            newArr.push(arr2[i]);
        }
    }t
    return newArr.sort();
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));