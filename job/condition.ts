interface ICity {
  name: string;
}

interface ISchool extends ICity {
  year: number;
}
// console.log(true ? "truevalue" : "failvalue");
type ConditionType = ISchool extends ICity ? number : string;
const test: ConditionType = 123;
