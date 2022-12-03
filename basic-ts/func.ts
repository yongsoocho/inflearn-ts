function add(a: YongsooNumber, b: YongsooNumber): SuperVoid {
  // return String(a + b);
  console.log("hello world");

  return;
}

add(1, 2);

const minus: minusFunc = (a: number, b: number): string => String(a - b);

const mutiple: mainMultiFunc = (a: number, b: number): subMultiFunc => {
  return () => {
    return a * b * 2;
  };
};

type typeName = any;
type addFunc = (a: number, b: number) => string;
type minusFunc = (a: number, b: number) => string;
type subMultiFunc = () => number;
type mainMultiFunc = (a: number, b: number) => subMultiFunc;

type MyString = string;
type YongsooNumber = number;
type SuperVoid = void;

// 1 2
// 1 함수
// 2 번째는 타입이 길어질 때 , "hello" | "world" | "hi" | "hi2" ......

function sendError(): never {
  throw { errorCode: 500, message: "internal server error" };
}
const result = sendError();
console.log("result :", result);
