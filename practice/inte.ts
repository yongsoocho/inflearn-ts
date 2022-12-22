interface ICar {
  name: string;
  speed: number;
}
const car = { speed: 0, name: "" };

const carProxy: ICar = new Proxy<ICar>(car, {
  get(target: ICar, p: keyof ICar) {
    console.log("get", target, p);
    return target[p];
  },
  set(target: ICar, p: keyof ICar, newValue: any) {
    console.log("set", target, p, newValue);
    if (p === "speed") target.speed = newValue > 0 ? newValue : 0;
    return true;
  },
});

carProxy.speed = -30;
console.log(carProxy.speed);
