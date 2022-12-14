// 같은 block 에 있다면 include 바꿈
const user: any = {
  ID: "yongsoo",
};
const value: unknown = {};

console.log(user.name); // undefined

/* 
unknown 타입은 any 타입과 동일하게 모든 값을 허용하지만,
할당된 값이 어떤 타입인지 모르기 때문에 함부로 프로퍼티나 연산을 할 수 없습니다.
*/
console.log(value.length); // 문제 발생
console.log(value.length); // 문제 발생
