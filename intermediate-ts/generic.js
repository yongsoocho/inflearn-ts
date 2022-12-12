"use strict";
// function printType(params: any) {
//   console.log(typeof params);
// }
function prt(params) {
    console.log(typeof params.data);
}
prt({ data: [123, 456, 789], name: "yongsoo" });
