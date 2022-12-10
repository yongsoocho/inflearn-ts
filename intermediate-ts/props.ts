// interface IName {
//   name: string;
// }

// interface ISchool {
//   school: string;
// }

// interface ICity {
//   city: string;
// }

interface ISuperKey {
  [props: string]: string;
}

function prt(params: ISuperKey) {
  if ("name" in params) console.log(params.name);
  else if ("school" in params) console.log(params.school);
  else if ("city" in params) console.log(params.city);
  else console.log("error 500");
}
prt({ city: "yongsoo" });
