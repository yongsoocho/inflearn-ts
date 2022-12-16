console.log(typeof "hi");
console.log(typeof 123);
console.log(typeof true);

const exString: string = "some string";

const childString: typeof exString = "haha";

function add(a: number, b: number): number {
  return a + b;
}
type A = ReturnType<typeof add>;

enum ENumbers {
  "zero",
  "one",
  "two",
  "three",
}
const nums: typeof ENumbers = ENumbers;
console.log(nums.three);
