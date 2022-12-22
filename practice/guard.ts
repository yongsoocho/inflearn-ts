class IExample1 {
  name: string;
  age: number;
}

interface IEXample2 {
  detail: IExample1;
  city: string;
}

function setEx(
  target: IEXample2,
  p: keyof IEXample2,
  newValue: typeof target[typeof p]
) {
  if (p === "city" && typeof newValue === "string") {
  } else if (p === "detail" && newValue instanceof IExample1) {
  }
}
