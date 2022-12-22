interface ADDF {
  (a: number, b: number): number;
}

const add: Function = new Function("a", "b", "return a + 2 * b");
const add2: ADDF = function ADDF(a: number, b: number) {
  return a + b;
};
console.log(add(1, 2));
console.log(add2(4, 5));
