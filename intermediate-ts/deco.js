var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1. 데코레이터 = 함수
function InitDeco(params) {
    console.log(params, "InitDeco");
}
// 2. 데코레이터는 class(자체, 필드, 메소드...) 와 함께 쓴다
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
        console.log("Example Class 생성자");
    }
    ExampleClass = __decorate([
        InitDeco
    ], ExampleClass);
    return ExampleClass;
}());
