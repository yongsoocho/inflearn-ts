class IDetail {
  constructor(public name: string, public age: number, public city: string) {}
}

type typeSNS = "KAKAO" | "NAVER";
interface IUser {
  detail: IDetail;
  marketing: boolean;
  sns: typeSNS;
}

function setUser(
  target: IUser,
  param: keyof IUser,
  newValue: typeof target[typeof param]
) {
  if (param === "marketing" && typeof newValue === "boolean") {
    target[param] = newValue;
  } else if (param === "detail" && newValue instanceof IDetail) {
    target[param] = newValue;
  } else if (param === "sns" && typeof newValue === "string") {
    const v: typeSNS = newValue;
    target[param] = v;
  }
}

const detail: IDetail = new IDetail("yongsoo", 25, "seoul");
const user: IUser = {
  detail,
  marketing: true,
  sns: "KAKAO",
};
console.log(user);
setUser(user, "sns", "NAVER");
setUser(user, "detail", new IDetail("yongsoocho", 26, "seoul"));
console.log(user);
