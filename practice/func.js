var add1 = new Function("a", "b", "return a + 2 * b");
console.log(add1(1, 3));
var add2 = function ADD2(a, b) {
    return a + b;
};
console.log(add2(4, 6));
