function add(a) {
  return a + 4;
}

// arrow func 기본형
const add2 = (a, b) => {
  return a + b;
};

// return 1줄
const add3 = (a, b) => a + b;

// param 1개일 때
const add4 = (a) => a + 4;

// 객체 반환
const add5 = (a) => {
  return { hello: "world" };
};
const add6 = (a) => ({ hello: "world" });
