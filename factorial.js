// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

// def factorial(number)
//   result = 1
//   current_number = number
//   number.times do
//     result = result * current_number
//     current_number = current_number - 1
//   end
//   result
// end
// p factorial(5)

function factorial(number) {
    var factorial = number;
    for(var i = number - 1; i > 0; i -= 1) {
        factorial *= i;
    }
    return factorial;
}

console.log(factorial(5))