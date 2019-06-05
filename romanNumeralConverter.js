// Symbol	I	V	X	L	C	D	M
// Value	1	5	10	50	100	500	1,000


function convertToRoman(num) {
    function float2int (value) {
        return value | 0;
    }
    var arr = []
    if (num >= 1000) {
        for (var i = float2int(num / 1000); i > 0; i--) 
            {arr.push("M")}
        num %= 1000;
    }
    if (num >= 500) {
        for (var i = float2int(num / 500); i > 0; i--) 
            {arr.push("D")}
        num %= 500;
    }
    if (num >= 100) {
        for (var i = float2int(num / 100); i > 0; i--) 
            {arr.push("C")}
        num %= 100;
    }
    if (num >= 50) {
        for (var i = float2int(num / 50); i > 0; i--) 
            {arr.push("L")}
        num %= 50;
    }
    if (num >= 10) {
        for (var i = float2int(num / 10); i > 0; i--) 
            {arr.push("X")}
        num %= 10;
    }
    if (num >= 5) {
        for (var i = float2int(num / 5); i > 0; i--) 
            {arr.push("V")}
        num %= 5;
    }
    for (var i = num; i > 0; i--) {
        arr.push("I");
    }
    return arr.join("");
}

console.log(convertToRoman(36));