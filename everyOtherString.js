// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

// def select_even_items(strings)
//   result = []
//   index = 0
//   strings.each do |string|
//     if index % 2 == 0
//       result << string
//     end
//     index = index + 1
//   end
//   result
// end
// p select_even_items(["a", "b", "c", "d", "e", "f"])

function everyOtherString(strings) {
    var evenStrings = [];
    for(var i = 0; i < strings.length; i += 2) {
        evenStrings.push(strings[i]);
    }
    return evenStrings;
}

console.log(everyOtherString(["a", "b", "c", "d", "e", "f"]))