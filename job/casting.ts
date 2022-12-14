// const text = document.querySelector("#text") as HTMLElement;
const text = document.querySelector("#text");

// ! 시 text | null 에러 삭제
console.log((text as HTMLElement).id);
