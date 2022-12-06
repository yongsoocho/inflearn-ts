"use strict";
const man = {
    name: "yongsoo",
    age: 25,
    city: "seoul",
};
// 웹 앱
// 경계선 //
// 서버
function prt(params) {
    var _a;
    console.log((_a = params === null || params === void 0 ? void 0 : params.city) !== null && _a !== void 0 ? _a : "default city");
}
prt(man);
