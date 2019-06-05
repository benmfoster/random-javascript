// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var cipher = [];
    str_arr = str.split("")
    for (var i = 0; i < str_arr.length; i++) {
        if (alphabet.includes(str_arr[i])) {
            var index = 0;
            for (var v = 0; v < alphabet.length; v++) {
                if (str_arr[i] == alphabet[v]) {
                    cipher.push(alphabet[(v + 13) % 26]);
                }
            }
        } else {
            cipher.push(str[i]);
        }
    }
    return cipher.join("");    
}
  
  // Change the inputs below to test
  console.log(rot13("SERR PBQR PNZC"));