"use strict";
// interface IName {
//   name: string;
// }
function prt(params) {
    if ("name" in params)
        console.log(params.name);
    else if ("school" in params)
        console.log(params.school);
    else if ("city" in params)
        console.log(params.city);
    else
        console.log("error 500");
}
prt({ city: "yongsoo" });
