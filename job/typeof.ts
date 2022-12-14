console.log(typeof "hi");
console.log(typeof 123);
console.log(typeof true);

const exString: string = "hello world";

// typeof 가 타입으로 들어갈 수 있다.
const childString: typeof exString = "hi";

// 함수에도 적용가능
function add(a: number, b: number): number {
  return a + b;
}
type AddNumbersFunc = (a: number, b: number) => number;
type A = ReturnType<typeof add>;
type AN = ReturnType<AddNumbersFunc>;

enum ESex {
  MAN = "MAN",
  WOMAN = "WOMAN",
}
const person: typeof ESex = ESex;
/*
interface 안됌
interface ISex {
  sex: boolean;
}
*/
