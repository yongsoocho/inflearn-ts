// f(g(x)) ----> f () { return g () } , g: 데코레이터 함수
// g ----> f(g(x)) , f: 데코레이터 팩토리 (목적: 인자전달, param 전달)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. 데코레이터는 함수다
function Controller(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._email = "http://www...";
            _this._name = "yongsoo";
            return _this;
        }
        return class_1;
    }(constructor));
}
function Get(params) {
    // console.log("[GET] ", params);
}
function Post(params) {
    console.log("[POST] deco deci Factory : ", params);
    return function (target, propertyKey, descriptor) {
        console.log("[POST] deco deco Func : ", target, propertyKey, descriptor);
        target.getReq();
        target[propertyKey]();
    };
}
function Column(params) {
    // console.log("Column !!", params);
}
function UseGuard() {
    // console.log("UseGuard Factory : ");
    // return (
    //   constructor: Function,
    //   propertyKey: string,
    //   descriptor: PropertyDescriptor
    // ) => {
    //   console.log("UseGuard deco Func : ", constructor, propertyKey, descriptor);
    // };
}
// 2. 데코레이터는 무조건 class 와 만 같이쓴다. (내부 외부, 멤버 변수, 메소드, 파라미터...)
var ExampleController = /** @class */ (function () {
    function ExampleController(email) {
        if (email)
            this._email = email;
    }
    ExampleController.prototype.getReq = function () {
        console.log("getReq method process!");
    };
    // Factory { f(g(x)) 여기서 f 역할, g deco func } -> top to bottom
    // deco func bottom to top
    // @Post("/board")
    // @UseGuard()
    ExampleController.prototype.postReq = function () {
        console.log("postReq method process!");
    };
    __decorate([
        Column("email")
    ], ExampleController.prototype, "_email");
    __decorate([
        Get("/user")
    ], ExampleController.prototype, "getReq");
    ExampleController = __decorate([
        Controller
    ], ExampleController);
    return ExampleController;
}());
// 3. 런타임에 클래스에 붙어서 실행되는 함수 = 데코레이터 -> @ -> new Class() 인스턴스화 없이 실행
// new ExampleClass();
// 4. 유추 -> 뭔가 데코레이터에서 함수 안에 데이터를 조작할 수 있을거 같다..
var test = new ExampleController("email");
console.log(test);
