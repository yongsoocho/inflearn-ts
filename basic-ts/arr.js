"use strict";
// 배열 타입
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = ["hi", "hello", "world"];
const arr4 = ["hi", "hello", "world"];
const arr5 = [
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
const arr6 = [1, "hi", {}, []];
console.log(arr6);
arr6.push("hahah");
console.log(arr6);
