// 배열 타입
const arr1: number[] = [1, 2, 3];
const arr2: Array<number> = [1, 2, 3];

const arr3: string[] = ["hi", "hello", "world"];
const arr4: Array<string> = ["hi", "hello", "world"];

interface IPerson {
  name: string;
  age: number;
  city?: string;
}

const arr5: IPerson[] = [
  {
    name: "yongsoo",
    age: 25,
    city: "seoul",
  },
  {
    name: "yongsoo",
    age: 25,
  },
  {
    name: "yongsoo",
    age: 25,
  },
  {
    name: "yongsoo",
    age: 25,
    city: "seoul",
  },
  {
    name: "yongsoo",
    age: 25,
    city: "seoul",
  },
];

// arr5.forEach((e: IPerson) => console.log(e?.city ?? "default"));

// 튜플 - 배열의 길이 length 와 안에 원소를 바꿀수 없는 .. 불변성유지
const arr6: [number, string, object, any[]] = [1, "hi", {}, []];

console.log(arr6);
arr6.push("hahah");
console.log(arr6);
