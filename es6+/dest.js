// // 1. 생략
// // const register = (ID, PW) => ({ ID, PW });
// // console.log(register("yongsoo1", 00001));

// // 2. 객체 보통은 1과 같이 씀
// const { name, age, sex } = {
//   name: "yongsoo",
//   age: 25,
//   sex: "male",
// };
// console.log(name, age, sex);

// // 3. 배열
// const [first, second, third] = [true, false, "hi"];
// console.log(first, second, third);

// // 4. spread 연산자 ...

// const [first2, ...rest] = [true, false, "hi"];
// console.log(first2, rest);

// const arr = [1, 2, 3];
// const arr2 = [...arr, 4, 5];
// console.log(arr2);

const { name: name2, ...rest2 } = {
  name: "yongsoo",
  age: 25,
  sex: "male",
};
console.log(name2, rest2);

console.log({
  ...rest2,
  height: 174,
});
