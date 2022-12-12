var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. 데코레이터는 함수다
// 4.
function InitClass(params) {
    console.log("init class on! :", params);
}
// 2. 데코레이터는 class(그 자체, 멤버 변수, 메소드 ..) 와 함께 쓴다
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass = __decorate([
        InitClass
    ], ExampleClass);
    return ExampleClass;
}());
// 3. 데코레이터는 클래스 정의에 붙어서 호출된다 -> 런타임 호출 -> 인스턴스가 없어도 호출
// new ExampleClass()
