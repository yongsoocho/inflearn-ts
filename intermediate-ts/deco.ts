// 1. 데코레이터는 함수다
function Controller(constructor: Function) {
  console.log("Controller : ", constructor);
}

function Get(params: any): any {
  console.log("[GET] ", params);
}

function Post(params: any): any {
  console.log("[GET] ", params);
}

function Column(params: any): any {
  console.log("Column !!", params);
}

// 2. 데코레이터는 무조건 class 와 만 같이쓴다. (내부 외부, 멤버 변수, 메소드, 파라미터...)
@Controller
class ExampleController {
  @Column("email")
  private _email: string;

  constructor(email: string) {
    this._email = email;
  }

  @Get("/api/v1/user")
  getReq() {}

  @Post("/api/v1/board")
  postReq() {}
}

// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ -> new Class() 인스턴스화 없이 실행
// new ExampleClass();

// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있을거 같다..
