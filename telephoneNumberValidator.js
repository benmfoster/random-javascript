function telephoneCheck(str) {
    // Good luck!
    var numbers = "1234567890".split("");
    var str_arr = str.split("");
    var arr = [];
    for (var i = 0; i < str_arr.length; i++) {
        if (numbers.includes(str_arr[i])) {
            arr.push(str_arr[i]);
        }
    }
    if (arr.length == 10) {
        return true
    } else {
        return false
    }
  }
  
  console.log(telephoneCheck("555-555-5555"));