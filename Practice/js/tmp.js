var gl = 10;

function g() {
    oops = 1;
    var oasd = 2;
}

function gg() {
    if (typeof gl != "undefined") {
        console.log(1);
    }
    if (typeof oops != "undefined") {
        console.log(123);
    }
    if (typeof oasd != "undefined") {
        console.log(1243);
    }
    if (1 === 1.0) console.log("hoi");
    if (1 === 1) console.log("has");
    if (1 == "1") console.log("this?");

    return 123 && "hi?";
} 

let arr = [1, 2, 3, 4, 5, 6];
const [...arr2, 1, 2] = arr;
console.log(arr2);


//console.log(gg());