// 성별, 부서코드, 카테고리, ...

enum categoryEnum {
  H = "H",
  K = "K",
  S = "S",
}

const category: categoryEnum = categoryEnum.K;

// 웹 앱
// ---기준선
// 서버

function cate(category: any) {
  console.log(category);
  if (category === "H") {
    console.log("5% 할인");
  } else if (category === "K") {
    console.log("10% 할인");
  } else if (category === "S") {
    console.log("80% 할인");
  } else {
    console.log("서버 멈춤");
  }
}

cate(category);

// 리터럴 타입

enum sexEnum {
  MALE = "MALE",
  FEMAEL = "FEMALE",
  ETC = "ETC",
}
type Hi = "MALE" | "FEMALE" | "ETC";
const sex: Hi = "MALE";
const sex2: sexEnum = sexEnum.MALE;
