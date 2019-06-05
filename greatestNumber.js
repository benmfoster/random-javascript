// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

// def max(numbers)
//   current_max = numbers[0]
//   numbers.each do |number|
//     if number > current_max
//       current_max = number
//     end
//   end
//   current_max
// end
// p max([5, 4, 8, 1, 2])

function greatestNumber(numbers) {
    var greatestNumber = numbers[0];
    for(var i = 1; i < numbers.length; i++) {
        if (numbers[i] > greatestNumber) {
            greatestNumber = numbers[i];
        }
    }
    return greatestNumber;
}

console.log(greatestNumber([5, 4, 8, 1, 2]))