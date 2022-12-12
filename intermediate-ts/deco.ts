// 1. 데코레이터는 함수다
// 4. contructor -> class 안의 데이터를 조작, 관리, 추가 , 삭제 등... 할 수 있겠다
function Controller(constructor: Function) {
  console.log("init class on! :", constructor);
}

// 2. 데코레이터는 class(그 자체, 멤버 변수, 메소드 ..) 와 함께 쓴다
@Controller
class ExampleController {
  constructor() {}

  getReq() {}

  postReq() {}

  putReq() {}

  //.....
}

// 3. 데코레이터는 클래스 정의에 붙어서 호출된다 -> 런타임 호출 -> 인스턴스가 없어도 호출
// new ExampleClass()
