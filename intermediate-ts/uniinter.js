// 1. union 합집합 | (OR)
var nameOrAge;
nameOrAge = "yongsoo";
nameOrAge = 25;
function prtUnion(params) {
    // name 정보가 들어왔을 때 로직
    if ("name" in params) {
        console.log(params.name);
    }
    // age 정보가 들어왔을 때 로직
    if ("age" in params) {
        console.log(params.age);
    }
}
prtUnion({ age: 25 });
function search(params) {
    console.log(params.age + " " + params.name);
}
search({ age: 25, name: "yongsoo" });
