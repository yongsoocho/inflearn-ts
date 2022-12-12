// 1. 데코레이터 = 함수
function InitDeco(constructor: any) {
  console.log(constructor, "InitDeco");
}

// 2. 데코레이터는 class(자체, 필드, 메소드...) 와 함께 쓴다
@InitDeco
class ExampleController {
  constructor() {
    console.log("Example Class 생성자");
  }
}

// 3. 데코레이터는 인스턴스가 없어도 런타임에서 실행, 데코레이터는 정의를 추적
// const something = new ExampleClass();

// 4. 클래스 data handling .. 정보 추가 .. 등등 유연한
