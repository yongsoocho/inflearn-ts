// 성별, 부서코드, 카테고리, ...
var categoryEnum;
(function (categoryEnum) {
    categoryEnum["H"] = "H";
    categoryEnum["K"] = "K";
    categoryEnum["S"] = "S";
})(categoryEnum || (categoryEnum = {}));
var category = categoryEnum.K;
// 웹 앱
// ---기준선
// 서버
function cate(category) {
    console.log(category);
    if (category === "H") {
        console.log("5% 할인");
    }
    else if (category === "K") {
        console.log("10% 할인");
    }
    else if (category === "S") {
        console.log("80% 할인");
    }
    else {
        console.log("서버 멈춤");
    }
}
cate(category);
