type userType = "admin" | "manager" | "user";

interface IAdmin {
  type: userType;
  post: any;
  info: any;
  detail: any;
}

interface IManager {
  type: userType;
  post: any;
  info: any;
}

interface IUser {
  type: userType;
  post: any;
}

function getLogic(p: IAdmin | IManager | IUser) {
  // return p.info;
  switch (p.type) {
    case "admin":
      console.log((p as IAdmin).detail);
      break;
    case "manager":
      console.log((<IManager>p).info);
      break;
    case "user":
      console.log(p.post);
      break;
  }
}

type errorCode = 404 | 500;
interface I_NOT_FOUND {
  code: errorCode;
  notFoundFunc(p: any): any;
}
interface I_INTERNAL_ERROR {
  code: errorCode;
  internalErrorFunc(p: any): any;
}
function errorHandler(p: I_NOT_FOUND | I_INTERNAL_ERROR) {
  switch (p.code) {
    case 404:
      console.log((p as I_NOT_FOUND).notFoundFunc);
      break;
    case 500:
      console.log((<I_INTERNAL_ERROR>p).internalErrorFunc);
      break;
  }
}
