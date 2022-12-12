"use strict";
// 서버에서 다른 서버로 정보
// 프론트에서 서버로 부터 받을 때 -> json object
// class LoginDataTransferObject2 {
//   public ID;
//   public PW;
//   constructor(ID: string, PW: string = "default password") {
//     this.ID = ID;
//     this.PW = PW;
//   }
// }
class LoginDataTransferObject {
    constructor(ID, PW = "default value") {
        this.ID = ID;
        this.PW = PW;
    }
}
const LoginDTO = new LoginDataTransferObject("hi");
// LoginDTO.PW = "set";
// LoginDTO.ID = "haha~";
console.log(LoginDTO);
