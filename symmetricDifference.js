// Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

// Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). The resulting array must contain only unique values (no duplicates).

// function sym() {
//     var myargs = [].slice.call(arguments);
//     arr = [];
//     dup_arr = [];
//     for(var i = myargs.length - 1; i > 0; i--) {
//         myargs[i].sort();
//         if (i > 0) {
//             for(j = myargs[i].length - 1; j > -1; j--) {
//                 if (j > 0) {
//                     if (myargs[i - 1].includes(myargs[i][j])) {
//                         dup_arr.push(myargs[i][j]);
//                     }
//                     else if (myargs[i][j] == myargs[i][j - 1]) {
//                         dup_arr.push(myargs[i][j]);
//                     }
//                     else {arr.push(myargs[i][j])};
//                 } else {
//                     if (myargs[i - 1].includes(myargs[i][j])) {
//                         dup_arr.push(myargs[i][j]);
//                     }
//                     else {arr.push(myargs[i][j])};
//                 }
//             }  
//         } else {
//                 for(j = myargs[i].length - 1; j > -1; j--) {
//                     if (j > 0) {
//                         if (myargs[i][j] == myargs[i][j - 1]) {
//                             dup_arr.push(myargs[i][j]);
//                         }
//                         else {arr.push(myargs[i][j])};
//                     } else {
//                         arr.push(myargs[i][j])
//                     }
//                 }
//             } 
//     }  
//     var final_arr = []
//     for (var i = 0; i < arr.length; i++) {
//         if (dup_arr.includes(arr[i])) {}
//         else {final_arr.push(arr[i])}
//     }
//     return final_arr
//  }

function sym() {
    var args = [].slice.call(arguments);
    var myargs = []
    for(var i = 0; i < args.length; i++) {
      for(var j = 0; j < args[i].length; j++) {
        myargs.push(args[i][j])
      }
    }
var items = myargs.sort()
var final_arr = []
var arr = []
for(var i = 0; i < items.length; i++) {
  arr.push(items[i])
}
for(var i = 0; i < arr.length; i++){
  value = items.splice(i, 1)
  var n = value[0]
  if (items.includes(n)) {} else {
    final_arr.push(n)
  }
  items = arr
}
    // myargs.sort()
    // var array = [];
    // for(var i = 0; i < myargs.length; i++) {
    //     if (myargs[i] != myargs[i + 1]) {
    //         array.push(myargs[i])
    //     }
    // }
    // var n = myargs.length - 1
    // if (arr.includes(myargs[n]) {
    //     arr.push(myargs[n]);
    // }
    return final_arr
}
  console.log(sym([1, 2, 3], [5, 2, 1, 4]));