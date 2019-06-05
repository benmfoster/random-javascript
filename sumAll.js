function sumAll(arr) {
    arr.sort();
    sum = 0;
    for (var i = arr[0]; i < arr[1] + 1; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumAll([1, 4]));