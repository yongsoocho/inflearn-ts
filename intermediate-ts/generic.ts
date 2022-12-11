// function printType(params: any) {
//   console.log(typeof params);
// }

// printType("아무거나");
// printType(23);
// printType({});

interface IGene<T, U> {
  data: Array<T>;
  name: U;
}

function prt(params: IGene<number, string>) {
  console.log(typeof params.data);
}
prt({ data: [123, 456, 789], name: "yongsoo" });
