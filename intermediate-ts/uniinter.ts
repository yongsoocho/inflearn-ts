// 1. union 합집합 | (OR)
let nameOrAge: string | number;
nameOrAge = "yongsoo";
nameOrAge = 25;
interface IName {
  name: string;
}
interface IAge {
  age: number;
}
type MyType = IName | IAge;
function prtUnion(params: MyType) {
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

// 2. intersection 교집합 & (AND)
interface IIName {
  name: string;
}

interface IIAge {
  age: number;
}

type ForSearch = IIName & IIAge;

function search(params: ForSearch) {
  console.log(params.age + " " + params.name);
}
search({ age: 25, name: "yongsoo" });
