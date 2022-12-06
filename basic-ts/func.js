"use strict";
function add(a, b) {
    // return String(a + b);
    console.log("hello world");
    return;
}
add(1, 2);
const minus = (a, b) => String(a - b);
const mutiple = (a, b) => {
    return () => {
        return a * b * 2;
    };
};
// 1 2
// 1 함수
// 2 번째는 타입이 길어질 때 , "hello" | "world" | "hi" | "hi2" ......
function sendError() {
    throw { errorCode: 500, message: "internal server error" };
}
const result = sendError();
console.log("result :", result);
