// 1. null undefined 같은 값
const un: undefined = undefined;

// 2. undefined 2개가 있다.

// 3. 최하위 계층 undefined 최하위기 때문.. 모드 타입의

interface IMan {
  name: string;
}

function printName(params: IMan) {
  console.log("printName on!");
  console.log(params?.name ?? "default value");
}

// printName({ name: "yongsoo" });
printName(undefined);
