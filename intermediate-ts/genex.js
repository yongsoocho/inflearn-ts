// extends  1 제한 안전성 2 보장
// 1
function prt(params, params2) {
    if (typeof params === "string")
        console.log("문자열 입니다");
    else if (typeof params === "number")
        console.log("숫자입니다");
    if (typeof params2 === "boolean")
        console.log("불리언 입니다");
    else if (typeof params2 === "object")
        console.log("어떤 객체입ㄴ디ㅏ");
}
prt("하하하", true);
prt(123, {});
function execute(params) {
    params.hi("yongsoo");
}
execute({
    hi: function (name) {
        console.log("hi!", name);
    }
});
