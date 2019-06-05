// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

// def descending(numbers)
//   result = []
//   index = numbers.length - 1
//   numbers.length.times do
//     result << numbers[index]
//     index = index - 1
//   end
//   result
// end
// p descending([1, 3, 5, 7])

function descendingOrder(numbers) {
    var descendingNumbers = [];
    for(var i = numbers.length - 1; i > -1; i--){
        descendingNumbers.push(numbers[i]);
    }
    return descendingNumbers
}

console.log(descendingOrder([1, 3, 5, 7]))