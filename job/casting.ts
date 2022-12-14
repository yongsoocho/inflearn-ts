// const text = document.querySelector("#text") as HTMLElement;
// const text = document.querySelector("#text");

// ! 시 text | null 에러 삭제
// 부분 적 캐스팅
// console.log((text as HTMLElement).id);

/* 
타입 표명을 "타입 캐스팅(type casting)"이라 부르지 않는 이유는 
일반적으로 캐스팅이란 말은 실행 시간에 어떤 동작이 일어날 것임을 내포하기 때문입니다. 
하지만 "타입 표명(type assertions)"은 순수하게 컴파일 시간 구성물이고 
당신의 코드가 어떤 식으로 분석되길 원하는지 컴파일러에게 힌트를 제공하는 수단입니다.
*/
interface IExam {
  value: number;
}
// 여기서 는 object 라 했기 때문에 안된다.
// 밑에 2가지 방법중 하나로 해라!
const exam: object = { value: 1 } as IExam;
console.log((exam as IExam).value);
console.log((<IExam>exam).value);
