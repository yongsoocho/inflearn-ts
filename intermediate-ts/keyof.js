function prt(params, key) {
    console.log(params[key]);
}
prt({
    title: "TS 배우기",
    publisher: "인프런",
    price: 29700,
    author: "조용수"
}, "author");
