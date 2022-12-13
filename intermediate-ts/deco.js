// f(g(x)) ----> f () { return g () } , g: 데코레이터 함수
// g ----> f(g(x)) , f: 데코레이터 팩토리 (목적: 인자전달, param 전달)
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. 데코레이터는 함수다
function Controller(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this._email = "http://www...";
            this._name = "yongsoo";
        }
    };
}
function Get(params) {
    // console.log("[GET] ", params);
}
function Post(params) {
    console.log("[POST] deco deci Factory : ", params);
    return (target, propertyKey, descriptor) => {
        console.log("[POST] deco deco Func : ", target, propertyKey, descriptor);
        target.getReq();
        target[propertyKey]();
    };
}
function Column(params) {
    return (target, propertyKey, descriptor) => {
        console.log(target, "C target"); // this
        console.log(propertyKey, "C pro"); // _email
        console.log(descriptor, "C des"); // undefined
    };
}
function UseGuard() {
    return (constructor, propertyKey, descriptor) => {
        console.log("UseGuard deco Func : ", constructor, propertyKey, descriptor);
    };
}
// 2. 데코레이터는 무조건 class 와 만 같이쓴다. (내부 외부, 멤버 변수, 메소드, 파라미터...)
let ExampleController = class ExampleController {
    constructor(email) {
        if (email)
            this._email = email;
    }
    getReq() {
        console.log("getReq method process!");
    }
    // Factory { f(g(x)) 여기서 f 역할, g deco func } -> top to bottom
    // deco func bottom to top
    // @Post("/board")
    // @UseGuard()
    postReq() {
        console.log("postReq method process!");
    }
    get email() {
        return this._email;
    }
    set email(newEmail) {
        this._email = newEmail;
    }
};
__decorate([
    Column("email")
], ExampleController.prototype, "_email", void 0);
__decorate([
    Get("/user")
], ExampleController.prototype, "getReq", null);
__decorate([
    UseGuard()
], ExampleController.prototype, "email", null);
ExampleController = __decorate([
    Controller
], ExampleController);
// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ -> new Class() 인스턴스화 없이 실행
// new ExampleClass();
// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있을거 같다..
const test = new ExampleController("email");
console.log(test);
